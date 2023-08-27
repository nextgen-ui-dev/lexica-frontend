"use client";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

import { useAuth } from "@/contexts/AuthContext";
import { axiosAuth } from "@/libs/axios";
import Cookies from "js-cookie";

const useAxiosAuth = () => {
  const refreshToken = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${Cookies.get(
            "access_token",
          )}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          await refreshToken();
          prevRequest.headers["Authorization"] = `Bearer ${Cookies.get(
            "access_token",
          )}`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [user, refreshToken]);

  return axiosAuth;
};

export default useAxiosAuth;
