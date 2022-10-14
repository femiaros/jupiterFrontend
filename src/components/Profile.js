import Pageheader from "./Pageheader"
import {Link as LinkR, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Profile = ({items}) => {
  const pageHeader = items[0].profilePageHeader[0];

  const navigate = useNavigate();
  const {auth,setShowNav} = useAuth();
  const logout = useLogout();

  useEffect(()=>{
    setShowNav(true);
    let isMounted = true;
    let links = document.querySelectorAll('.blurout');
    links = [...links];

    isMounted && links.map(link=> (link.addEventListener('click',function linkClicked(){
        alert('Sorry Course Not Paid For');
      })
    ))

    return () => isMounted = false;
  },[])

  const signOut = async ()=>{
    await logout();
    navigate('/');
  }
  pageHeader.signOut = signOut;
  
  return (
    <div className="Profile">
        <Pageheader pageHeader={pageHeader}/>
        <div className="profile-container">
          <div className="tutorial-links">
            <h2>Course Links</h2>
            <ul>
              <li className={auth?.courseRoles.includes(5150) ? '':"blurout"}>
                  <LinkR to='/introduction'>Introductions</LinkR>
              </li>
              <li className={auth?.courseRoles.includes(2001) ? '':"blurout"} >
                  <LinkR to='/intro'>Camera and Lens</LinkR>
              </li>
              <li className={auth?.courseRoles.includes(1984) ? '':"blurout"}>
                  <LinkR to='/intro'>Film Making</LinkR>
              </li>
            </ul>
          </div>
        </div>
        
    </div>
  )
}

export default Profile