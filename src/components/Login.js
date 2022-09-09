import Pageheader from "./Pageheader"
import { useRef, useState, useEffect, useContext} from "react";
import useAuth from '../hooks/useAuth';
import {Link as LinkR,useNavigate,useLocation} from "react-router-dom";
import AuthContext from '../context/AuthProvider';

import axios from "../api/axios";
const LOGIN_URL = '/auth';

const Login = ({items}) => {
    const pageHeader = items[0].loginPageHeader[0]
    const {setShowNav} = useContext(AuthContext);

    // getting required contexts from useContext(AuthContext) with is combined in useAuth
    const {setAuth} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    // set location path to where user is coming from or if user is just logging in send user to home.
    const from = location.state?.from?.pathname || "/";


    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    //focus on username field when screen loads
    useEffect(() => {
        userRef.current.focus();
        setShowNav(false);
    }, [])
    //clear out error msg any time user types input
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const courseRoles = response?.data?.roles;
            setAuth({ user, pwd, courseRoles, accessToken }); 
            setUser('');
            setPwd('');
            //send user to where user is coming from or home page
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err)
            if (!err?.response) {
                setErrMsg('No Server Response');
            }else if(err.code === 'ERR_NETWORK'){
                setErrMsg('Network Error');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else{
                setErrMsg('Login Failed, Check Inputs');
            }
            errRef.current.focus();
        }
        
    }

  return (
        
        <section className='Register'>
            <Pageheader pageHeader={pageHeader}/>
            <div className="register-container">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username: 
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />

                    <label htmlFor="password">
                        Password: 
                    </label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />

                    <button disabled={!user || !pwd  ? true : false}>Login</button>
                </form>

                <p>
                    Need an Account?<br />
                    <span className="line">
                        <LinkR to="/register">Sign Up</LinkR>
                    </span>
                </p>
            </div>
        </section>
       
    
    )
}

export default Login