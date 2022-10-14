import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="socials">
        <a href='https://twitter.com/'>
            <BsTwitter/>
        </a>
        <a href='https://www.facebook.com/'>
            <FaFacebookF/>
        </a>
        <a href='https://www.instagram.com/accounts/login/'>
            <BsInstagram/>
        </a> 
    </div>
  )
}

export default Socials