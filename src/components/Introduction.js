import Pageheader from "./Pageheader";
import Intro from "./Intro";
import {useEffect} from "react";
import useAuth from '../hooks/useAuth';

const Introduction = ({items}) => {
  const pageHeader = items[0].introductionPageHeader[0];
  const {setShowNav} = useAuth();

  useEffect(() => {
    setShowNav(true);
  }, [])
 
  return (
    <div className="Introduction">
        <Pageheader pageHeader={pageHeader}/>
        <Intro />
    </div>
  )
}

export default Introduction