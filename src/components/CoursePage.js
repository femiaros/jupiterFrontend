import CoursePageHeader from "./CoursePageHeader";
import CourseCenter from "./CourseCenter";
import {useParams, useLocation, Navigate} from "react-router-dom";
import {useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import autoPageUp from '../hooks/autoPageUp';
import Popular from "./Popular";

const CoursePage = ({items,setItems}) => {
  const {setSeeAll,setShowNav} = useAuth(); 
  const location = useLocation();
  const {id} = useParams();
  const AllCourse = items[0].courseData;
  const Course = AllCourse.find(course=> course.id == id);
        

  const otherCourses = AllCourse.filter(course=> course.id != id);
  

  useEffect(() => {
    autoPageUp();
    setSeeAll(false);
    setShowNav(false);
  }, [])

  return (
    <>  
      {
        Course ? 
        <div className="CoursePage">
          
          <CoursePageHeader Course = {Course} items={items} setItems={setItems}/>
          
          <div className="CoursePageBody">  
            <div className="coursePageBody-container">
              
              <CourseCenter Course = {Course}/>
              
            </div>
          </div>  

          <Popular popularCourses = {otherCourses} Title={'Others'}/>

        </div> 
          :
        <Navigate to='/pageNotFound' state={{from: location}} replace />
      }
    </>    
  )
}

export default CoursePage;