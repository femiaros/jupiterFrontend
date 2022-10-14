import {useEffect,useState} from 'react';
import Loading from "./Loading";
import { Outlet } from 'react-router-dom';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(()=>{
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
                console.log('refresh RAN');
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        } 

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        // !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false);
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    },[]); 

    useEffect(()=>{
        // console.log(`isloading ${isLoading}`);
        // console.log(`aT ${JSON.stringify(auth?.accessToken)}`);
    },[isLoading])
     
    return(
        <>
            {isLoading
                ? <Loading/>
                : <Outlet />
            } 
        </>
    )
}

export default PersistLogin