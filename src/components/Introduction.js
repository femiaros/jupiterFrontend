import Pageheader from "./Pageheader";
import Intro from "./Intro";
import {useContext,useEffect} from "react";
import AuthContext from '../context/AuthProvider';

const Introduction = ({items}) => {
  const pageHeader = items[0].introductionPageHeader[0];
  const {setShowNav} = useContext(AuthContext);

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