import { useEffect } from "react";
import { axiosPrivate } from "../lib/axios";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const { auth } = useAuth();

  useEffect(() => {
    const responseInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    return () => {
      //cleanup after component unmounts
      axiosPrivate.interceptors.request.eject(responseInterceptor);
    };
  }, [auth]);

  return axiosPrivate;
};

export default useAxiosPrivate;
