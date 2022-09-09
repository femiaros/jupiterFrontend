import {AiFillHome} from 'react-icons/ai'

const About2 = ({status,setStatus,statusFxn,claxFxn}) => {
  return (
    <div id='About2' className={status?'About':null}>
       <AiFillHome  />
       <AiFillHome />
       <button onClick={statusFxn}>click</button>
       <span>{status.toString()}</span>
    </div>
  )
}

export default About2


/*

import {Link as LinkS} from 'react-scroll';
import heroImage2 from '../images/hero2.jpg';


const Courses = () => {
  return (
    <div id="Courses" className="Courses">
        <div className="courses-container"> 
            <h1>Our Featured Courses</h1>
            <div className="courses-wrapper">
                <div className="course">
                    <img src={heroImage2} alt="" />
                    <div className="course-content">
                        <h2>Cinematography</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                        <span className='btn2'>
                            <LinkS to='#'>Start your free trial</LinkS>
                        </span>
                    </div>
                </div>

                <div className="course">
                    <img src={heroImage2} alt="" />
                    <div className="course-content">
                        <h2>Cinematography</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                        <span className='btn2'>
                            <LinkS to='#'>Start your free trial</LinkS>
                        </span>
                    </div>
                </div>
                
                <div className="course">
                    <img src={heroImage2} alt="" />
                    <div className="course-content">
                        <h2>Cinematography</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                        <span className='btn2'>
                            <LinkS to='#'>Start your free trial</LinkS>
                        </span>
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Courses

*/
