import {Link as LinkR} from "react-router-dom";
import {CgProfile} from 'react-icons/cg';
import {BsGear} from 'react-icons/bs';
import useAuth from "../hooks/useAuth";

const Pageheader = ({pageHeader}) => {
  const {auth} = useAuth();

  return (
    <div className='Pageheader'>
        <div className="pageheader-container">

          {auth?.user ? (
              <div className="profile-section">
                <div className="profile-image">
                  <CgProfile/>
                  <span className="settings">Settings <BsGear/> </span>
                </div>
                <div className="profile-details">
                  <span className="username">{auth.user}</span>
                  <span className="userID">ZQ_9273-$</span>
                </div>
              </div>
            )
            :(
              <></> 
            )}
            
            <h1>{pageHeader.header}</h1>
            <div className="contact-links">
                <LinkR to={pageHeader.homeLink.link}>{pageHeader.homeLink.linkTitle}</LinkR>
                <LinkR onClick={pageHeader.signOut} to={pageHeader.secondLink.link} className="page-link">{pageHeader.secondLink.linkTitle}</LinkR>
            </div>
        </div>
    </div>
  )
}

export default Pageheader