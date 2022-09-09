// hook to attach interseptor to axios instance
import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    
    useEffect(()=>{

      //runs first ,if res = 403 : run the nxt and get a new AT attached to auth
      const requestIntercept = axiosPrivate.interceptors.request.use(
        config => {
          //fresh request check if req header has AT, if not attach from auth
          if (!config.headers['Authorization']) {
              config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
          }
          return config;
        }, (error) => Promise.reject(error)
      );

      // run if res = 403
      const responseIntercept = axiosPrivate.interceptors.response.use(
        //check if res is good, dont bother doing anythng just return good res
        response => response,
        async (error) =>{
          //if res bad get a new AT
          const prevRequest = error?.config;
          if(error?.response?.status === 403 && !prevRequest?.sent){
            prevRequest.sent = true;
            const newAccessToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axiosPrivate(prevRequest)
          }
          return Promise.reject(error);
        }
      );

      //interceptors has to be removed so not to mess requests an d responses
      return () => {
        axiosPrivate.interceptors.request.eject(requestIntercept);
        axiosPrivate.interceptors.response.eject(responseIntercept);
      }
    },[auth,refresh])

  return axiosPrivate;
}

export default useAxiosPrivate