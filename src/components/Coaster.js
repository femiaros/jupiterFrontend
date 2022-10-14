import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {RiPlayList2Line} from 'react-icons/ri';
import {TbClick} from 'react-icons/tb';
import {Link as LinkR} from "react-router-dom";

import {useEffect} from 'react';

const Coaster = ({courseData}) => {
  let App;
  let wrapperLength = 0;
  let movingLength= 0;
  
  let coachWrapper;
  let coachs;
  let prevBtn;
  let nextBtn;
  let coasterNav;
  let dots;     

  // Wait 1s after content renders,allocate variables 
    setTimeout(function(){
      App = document.querySelector('.App');
      coachs = Array.from(document.querySelectorAll('.coach'));
      coachWrapper = document.querySelector('.coach-wrapper');
      prevBtn = document.querySelector('.arrow-back');
      nextBtn = document.querySelector('.arrow-forward');
      coasterNav = document.querySelector('.coaster-nav');
      dots = Array.from(coasterNav.children);
      //coachwrapper lenght
      wrapperLength =  ( (coachs.length * 330) );
      movingLength = (wrapperLength / coachs.length);
    },1000)
  
 
  //Return screen width function
  const getScreenWidth= ()=>{
    return App.getBoundingClientRect().width;
  }

  //slide to coach function
  const moveToCoach = (coachWrapper,currentCoach,targetCoach,leftMove)=>{
    const targetIndex = coachs.findIndex(item=> item === targetCoach);
    let addedPixel = (targetIndex*20);
    coachWrapper.style.transform = `translateX(-${leftMove + addedPixel}px)`;
    currentCoach.classList.remove('current-coach');
    targetCoach.classList.add('current-coach');
  }

  // Hide & Show prevBTN / nextBtn at the end/start of list
  const hideShowArrows = (targetIndex)=>{
    if(targetIndex === 0){
        prevBtn.classList.add('hide-arrow');
        nextBtn.classList.remove('hide-arrow');
    }else if(getScreenWidth() > 1154.9 && targetIndex === (coachs.length - 3)){
        prevBtn.classList.remove('hide-arrow');
        nextBtn.classList.add('hide-arrow');
    }else if((getScreenWidth() > 802 && getScreenWidth() <= 1154.9) && targetIndex === (coachs.length - 2)){
        prevBtn.classList.remove('hide-arrow');
        nextBtn.classList.add('hide-arrow');
    }else if( getScreenWidth() <= 802 && targetIndex === (coachs.length - 1)){
        prevBtn.classList.remove('hide-arrow');
        nextBtn.classList.add('hide-arrow');
    }else{
        prevBtn.classList.remove('hide-arrow');
        nextBtn.classList.remove('hide-arrow');
    }
  }

  //update dot navigation to indicate the current coach
  const updateDots =(currentDot,targetDot)=>{
    currentDot.classList.remove('current')
    targetDot.classList.add('current')
  }

  //next Btn func
  const arrowForward = ()=>{
    const currentCoach  = coachWrapper.querySelector('.current-coach');
    const currentCoachIndex = coachs.findIndex(item=> item === currentCoach);
    //condition for screen > 1154.9
    if(getScreenWidth() > 1154.9 && (currentCoachIndex === (coachs.length - 3))) return;

    //condition for screen >802 and <= 1154.9
    if((getScreenWidth() > 802 && getScreenWidth() <= 1154.9) && (currentCoachIndex === (coachs.length - 2))) return;
    //condition for screen <= 802 
    if( getScreenWidth() <= 802 && (currentCoachIndex === (coachs.length - 1))) return;

    const nextCoach = currentCoach.nextElementSibling;
    const currentDot  = coasterNav.querySelector('.current');
    const nextDot  = currentDot.nextElementSibling;
    const nextIndex = coachs.findIndex(coach=> coach === nextCoach);
   
    //amount of pixel to be moved by coach
    const leftMove = (movingLength * nextIndex);

    // move to the next slide
    moveToCoach(coachWrapper,currentCoach,nextCoach,leftMove);
    
    //changing the classname of current and target indicator
    updateDots(currentDot,nextDot);

    //hiding the slide direction btns
    hideShowArrows(nextIndex);
    
  }

  //prev BTN func
  const arrowBack = ()=>{
    const currentCoach  = coachWrapper.querySelector('.current-coach');
    const prevCoach = currentCoach.previousElementSibling;
    const prevIndex = coachs.findIndex(coach=> coach === prevCoach);
    const currentDot  = coasterNav.querySelector('.current');
    const prevDot  = currentDot.previousElementSibling;

    //amount of pixel to be moved by coach
    const leftMove = (movingLength * prevIndex);

    // move to the next slide
    moveToCoach(coachWrapper,currentCoach,prevCoach,leftMove);
    
    //changing the classname of current and target indicator
    updateDots(currentDot,prevDot);

    //hiding the slide direction btns
    hideShowArrows(prevIndex);  
  }

  //nav-indicator functionality
  const dotNavigation = (e)=>{
      let targetDot = e.target.closest('.coach-indicator');

      //end func if dot not clicked
      if(!targetDot) return;

      const currentCoach = coachWrapper.querySelector('.current-coach');
      
      //dont slide if slideWindow has shows all remaining content

      const targetDotIndex = dots.findIndex(dot=> dot === targetDot);

      //condition for screen bigger than 1154.9px
      if (getScreenWidth() > 1154.9 && (targetDotIndex > (coachs.length - 3))) targetDot = dots[(coachs.length - 3)];
      //condition for screen >802 and  <= 1154.9px
      if ((getScreenWidth() > 802 && getScreenWidth() <= 1154.9) && (targetDotIndex > (coachs.length - 2))) targetDot = dots[(coachs.length - 2)];

      const currentDot = coasterNav.querySelector('.current');
      const targetIndex = dots.findIndex(dot=> dot === targetDot)
      const targetCoach = coachs[targetIndex];
      const leftMove = (movingLength * targetIndex);

      //move to slide 
      moveToCoach(coachWrapper,currentCoach,targetCoach,leftMove);

      //changing the classname of current and target indicator
      updateDots(currentDot,targetDot);

      //hiding the slide direction btns
      hideShowArrows(targetIndex);
  }

  return (
    <div className='Coaster'>

        <span className='arrow-back hide-arrow' onClick={arrowBack}>
          <IoIosArrowBack/>
        </span>

        <div className="coaster-rail">
          <div className="coach-wrapper">
            
            {
              courseData.map((course,i)=>(
                i===0 ? 
                  <div className="coach current-coach" key={course.id}>
                    <div className="coach-upper">
                      <img src={course.postalsrc} alt="" />
                      <h3>{course.title}</h3>
                    </div>
                    <div className="coach-lower">

                        <p>{course.description}</p>
                      
                    </div>
                    <LinkR
                      to={`/course/${course.id}`}
                      className="coach-btn"
                      key={course.id}
                    >
                      <span>details</span>
                      <TbClick/>
                    </LinkR>

                    <span className='playlist'>
                      <RiPlayList2Line/>
                      <small>
                        {course.videos.length}
                      </small>
                    </span>
                </div> :
                <div className="coach" key={course.id}>
                    <div className="coach-upper">
                      <img src={course.postalsrc} alt="" />
                      <h3>{course.title}</h3>
                    </div>
                    <div className="coach-lower">

                        <p>{course.description}</p>
                        
                    </div>
                    
                    <LinkR
                      to={`/course/${course.id}`}
                      className="coach-btn"
                      key={course.id}
                    >
                      <span>details</span>
                      <TbClick/>
                    </LinkR>

                    <span className='playlist'>
                      <RiPlayList2Line/>
                      <small>
                        {course.videos.length}
                      </small>
                    </span>
                </div>
              ))
            }
            
          </div>

        </div>

        <span className='arrow-forward' onClick={arrowForward}>
          <IoIosArrowForward/>
        </span>

        {/* Coaster Navigation */}
        <div className="coaster-nav" onClick={(e)=>dotNavigation(e)}>
            {
            courseData.map((course,i)=>(
              i===0 ? 
                <div className="coach-indicator current" key={course.id}>
                </div>
              :
                <div className="coach-indicator" key={course.id}></div>
              )
            )}
        </div>

    </div>
  )
}

export default Coaster