import {useEffect} from 'react';
import useAuth from '../hooks/useAuth'; 
import Pageheader from "./Pageheader" 
import autoPageUp from '../hooks/autoPageUp';
import Contactform from "./Contactform"
import Subscribe from "./Subscribe"

const Contact = ({items}) => {
  const pageHeader = items[0].contactPageHeader[0];
  const {setShowNav} = useAuth();

  useEffect(() => {
    autoPageUp();
    setShowNav(false);
  }, [])

  

  return (
    <div className='Contact'>
        <Pageheader pageHeader={pageHeader}/>
        <Contactform/>
        <Subscribe />
    </div>
  )
}

export default Contact