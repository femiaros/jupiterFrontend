import Hero from "./Hero"
import Proof from "./Proof";
import Lastest from "./Lastest";
import Popular from "./Popular";
import Divider from "./Divider";
import About2 from "./About2";
import Courses from "./Courses"; 
import About from "./About"; 
import Experts from "./Experts"; 
import FAQ from "./FAQ"; 
import Testimonial from "./Testimonial"; 
import Subscribe from "./Subscribe"; 
import autoPageUp from '../hooks/autoPageUp';
import {useEffect} from "react";
import useAuth from '../hooks/useAuth';


const Home = ({items,courses,search,setSearch}) => {
  const {setShowNav,setSeeAll} = useAuth();  

  //Filter top 6 courses
  const popularCourses = items[0].courseData.filter((course,i) => i >= (items[0].courseData.length-6) );
  
  useEffect(()=>{
    autoPageUp();
    setShowNav(true);
    setSeeAll(true);
  },[])

  return (
    <div className='Home'>
        <Hero heroData = {items[0].heroData} /> 
        <Proof tvLogos = {items[0].heroData[0].tvLogos} /> 
        <Lastest courses = {courses} search={search} setSearch={setSearch}/> 
        <Popular popularCourses = {popularCourses} Title={'Popular'}/> 
        <Divider /> 
        <About aboutData = {items[0].aboutData} />
        <Courses courseData = {items[0].courseData}/>
        <Experts expertsData = {items[0].expertsData} />
        <FAQ  />
        <Testimonial testimonialData = {items[0].testimonialData} />
        <Subscribe />
    </div>
  )
}

export default Home