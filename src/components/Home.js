import Hero from "./Hero"
import About2 from "./About2";
import Courses from "./Courses"; 
import About from "./About"; 
import Experts from "./Experts"; 
import Testimonial from "./Testimonial"; 
import Subscribe from "./Subscribe"; 
import { useContext,useEffect} from "react";
import AuthContext from '../context/AuthProvider';


const Home = ({items}) => {
  const {setShowNav} = useContext(AuthContext);  

  useEffect(()=>{
    setShowNav(true);
  },[])

  return (
    <div className='Home'>
        <Hero heroData = {items[0].heroData} /> 
        <Courses heroImage2 = {items[0].heroData[0].images[1].src}/>
        <About aboutData = {items[0].aboutData} />
        <Experts expertsData = {items[0].expertsData} />
        <Testimonial testimonialData = {items[0].testimonialData} />
        <Subscribe />
    </div>
  )
}

export default Home