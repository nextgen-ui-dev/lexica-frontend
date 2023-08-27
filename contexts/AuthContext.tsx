"use client";

import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import axios, { axiosAuth } from "@/libs/axios";
import Cookies from "js-cookie";
import jwt from "jwt-decode";
import { useRouter } from "next/navigation";
import { googleLogout } from "@react-oauth/google";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";
import useOnboardingModal from "@/hooks/useOnboardingModal";
import useAxiosAuth from "@/hooks/useAxios";

export interface User {
  id: string;
  name: string;
  email: string;
  image_url: string;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

type Token = {
  access: string | undefined;
  refresh: string | undefined;
};

type AuthContextValue = {
  token: Token;
  login: (data: { googleToken?: string }) => void;
  logout: () => void;
  updateToken: (token: Token) => void;
  user: User | undefined;
};

const AuthContext = createContext({} as AuthContextValue);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<Token>({ access: "", refresh: "" });
  const [user, setUser] = useState<User>();
  const onBoaridngModal = useOnboardingModal();
  const path = usePathname();
  const router = useRouter();
  const axios = useAxiosAuth();

  const getCurrentUser = async () => {
    const response = await axios.get("/auth/userinfo", {
      headers: {
        Authorization: `Bearer ${Cookies.get("access_token")}`,
        "Content-Type": "application/json",
      },
    });
    setUser({ ...response.data });
    if (response.data.status === 1) {
      onBoaridngModal.onOpen();
    }
  };

  const setCurrentUser = async () => {
    await getCurrentUser();
  };

  const updateToken = (token: Token) => {
    Cookies.set("access_token", token.access as string);
    Cookies.set("refresh_token", token.refresh as string);
    setToken(token);
  };

  const clearSession = () => {
    setToken({ access: "", refresh: "" });
    setUser(undefined);
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
  };

  const login = async (data: { googleToken?: string }) => {
    const postLogin = axiosAuth.post(
      "/auth/sign-in/google",
      {},
      {
        headers: {
          "X-Google-Id-Token": data.googleToken,
        },
      },
    );

    await postLogin
      .then((res) => {
        Cookies.set("access_token", res.data.access_token);
        Cookies.set("refresh_token", res.data.refresh_token);
        setToken({
          access: res.data.access_token,
          refresh: res.data.refresh_token,
        });
        setCurrentUser();
      })
      .catch((err) => console.error(err));
  };
  const logout = () => {
    googleLogout();
    toast.success("Successfully log out");
    clearSession();
  };

  const assertAlive = async (decoded: any) => {
    const now = Date.now().valueOf() / 1000;
    if (typeof decoded.exp !== "undefined" && decoded.exp < now) {
      await axiosAuth
        .post(
          "/auth/refresh-token",
          {},
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("refresh_token")}`,
            },
          },
        )
        .then((res) => {
          Cookies.set("access_token", res.data.access_token);
          Cookies.set("refresh_token", res.data.refresh_token);
          setToken({
            access: res.data.access,
            refresh: res.data.refresh,
          });
        })
        .catch((_) => {
          clearSession();
          router.push("/");
        });
    }
  };

  useEffect(() => {
    setToken({
      access: Cookies.get("access_token") || "",
      refresh: Cookies.get("refresh_token") || "",
    });

    try {
      const accessToken = Cookies.get("access_token");
      if (!accessToken || accessToken === "undefined") {
        throw new Error();
      } else if (user === undefined) {
        setCurrentUser();
      }
      assertAlive(jwt(accessToken));
    } catch (err: any) {
      if (err.message) toast.error(err.message);
    }
  }, [path]);

  const value = {
    token,
    updateToken,
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
