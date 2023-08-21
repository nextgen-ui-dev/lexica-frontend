"use client";

import { useAuth } from "@/contexts/AuthContext";
import { axiosAuth } from "@/libs/axios";
import Cookies from "js-cookie";

export const useRefreshToken = () => {
  const { updateToken} = useAuth();
  const refreshToken = async () => {
    const res = await axiosAuth.post("/auth/refresh-token", {
    }, {
      headers: {
        Authorization: `Bearer ${Cookies.get("refresh_token")}`
      }
    });
    if (res.status === 200) {
      updateToken({
        access: res.data.access_token,
        refresh: res.data.refresh_token,
      });
    }
  };
  return refreshToken;
};
