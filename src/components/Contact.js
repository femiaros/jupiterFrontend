import {useContext,useEffect} from 'react'
import AuthContext from '../context/AuthProvider';
import Pageheader from "./Pageheader"
import Contactform from "./Contactform"
import Subscribe from "./Subscribe"

const Contact = ({items}) => {
  const pageHeader = items[0].contactPageHeader[0];
  const {setShowNav} = useContext(AuthContext);

  useEffect(() => {
    setShowNav(true);
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