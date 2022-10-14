import Coaster from "./Coaster";
import useAuth from '../hooks/useAuth';

import {useEffect} from 'react';


const Courses = ({courseData}) => {
    const {auth} = useAuth();

    

  return (
    <div id="Courses" className="Courses">
        <div className="courses-container"> 
            <h1 className='heading1'>Featured Courses</h1>

            <Coaster courseData = {courseData}/>
        </div>    
    </div>
  )
}

export default Courses