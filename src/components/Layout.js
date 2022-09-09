import {Outlet} from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {MdKeyboardArrowUp} from 'react-icons/md';
import useAuth from '../hooks/useAuth';
import { useEffect,useState, useContext} from "react";
import AuthContext from '../context/AuthProvider';

const Layout = ({menuOpen,menuToggle}) => {
    const {auth} = useAuth();
    // auth.user = true;
    const {showNav} = useContext(AuthContext);
    const [scrollHeader, setScrollHeader] = useState(false);
    const [scrollBtn, setScrollBtn] = useState(false);

    const changeHeader =()=>{
        window.scrollY >= 90 ? setScrollHeader(true): setScrollHeader(false);
        window.scrollY >= 300 ? setScrollBtn(true): setScrollBtn(false);
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeHeader)
    },[])

    const upScroll = ()=>{
        scroll.scrollToTop()
    }

  return (
    <>
        <header id="Header" className={scrollHeader? 'transBG': ''}>
            <nav>
                <LinkR to='/' className="logo" onClick={upScroll}>
                    <span className="logo-left">
                        <h1>JA</h1>
                    </span>
                    <span className="logo-right">
                        <h2>Jupiter academy</h2>
                        <h3>master your craft</h3>
                    </span>
                </LinkR>
                <ul className={menuOpen? "nav-links open":"nav-links"}>
                    <li className="links" onClick={menuToggle}>
                        <LinkR to='/' >
                            Home
                        </LinkR>
                    </li>
                    
                    { showNav ? 
                        <li className="links">
                            <LinkS 
                                to='Courses'
                                smooth={true} 
                                duration={700}
                                exact="true"
                                offset={-90}
                                onClick={menuToggle}
                            >courses
                            </LinkS>
                        </li>
                        :
                        <></>    
                    }

                    <li className="links" onClick={menuToggle}>
                        <LinkR to='/contact'>contact</LinkR>
                    </li>
                </ul>
                <div className="member">
                    {!auth?.user ? (
                            <span className="btn">
                                <LinkR to='/login'>Join</LinkR>
                            </span>
                        ):(
                            <>
                                <div className="profile-icon">
                                    <LinkR to='/profile'><CgProfile/></LinkR>
                                    <span className="resource">Resource </span>
                                </div>
                            </>
                        )}
                    
                </div>
                <div className="menuIcon" onClick={menuToggle}>
                    <FaBars className="hamburger"/>
                </div>

            </nav>
        </header>
        <main className="App">
            <Outlet/>
        </main>
        <footer className="Footer">
            <div className="footer-container">
                <div className="footer-contacts">
                    <LinkR to='/' className="logo">
                        <span className="logo-left">
                            <h1>JA</h1>
                        </span>
                        <span className="logo-right">
                            <h2>Jupiter academy</h2>
                            <h3>master your craft</h3>
                        </span>
                    </LinkR>
                    <a href="tel:+2348131296481" className="reach-us">
                        <span>Call us:</span>
                        <span>081-324-653-81</span>
                    </a>
                    <a href="mailto:ouremail@gmail.com" className="reach-us">
                        <span>Email us:</span>
                        <span>ouremail@gmail.com</span>
                    </a>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" className="fb">
                            <FaFacebookF className="fb-icon"/>
                        </a>
                        <a href="https://www.instagram.com/accounts/login/" className="insta">
                            <BsInstagram className="insta-icon"/>
                        </a>
                        <a href="https://twitter.com/" className="twitter">
                            <BsTwitter className="twitter-icon"/>
                        </a>
                    </div> 
                </div>
                <div className="footer-map">
                    <h3>Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4811611379405!2d3.9010532142597336!3d7.411877394652347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398de771a3cc9b%3A0x740d7eddc25df7b!2sJupiter%20Film%20Academy!5e0!3m2!1sen!2sng!4v1661353618234!5m2!1sen!2sng" width="100%" height="290px" style={{border:'0',}} allowFullScreen="" loading="lazy" title="google-map" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="footer-courses">
                    <h3>COURSES OFFERED</h3>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">Cinematography</LinkS>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">Lighting & Grip</LinkS>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">Directing</LinkS>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">Camera And Lenses</LinkS>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">Post Production</LinkS>
                    <LinkS to='Courses' smooth={true} duration={700}exact="true"offset={-90} className="course-link">View All Courses</LinkS>
                </div>
            </div>
            <div className="footer-down">
                <small>2022 © Jupiter Academy, All Rights Reserved.</small>
                <span className={scrollBtn ? 'scrollUP': 'hide'} onClick={upScroll}> <MdKeyboardArrowUp/> </span>
            </div>
        </footer>
    </>
  )
}

export default Layout