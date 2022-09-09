import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from "react-router-dom";
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {FaVideo} from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
// IoIosArrowBack
import {useEffect} from 'react';


const Courses = ({heroImage2}) => {
    const {auth} = useAuth();

    useEffect(() => {

        const App = document.querySelector('.App');
        const track = document.querySelector('.carousel-track')
        const slides = Array.from(track.children);
        const nextBtn = document.querySelector('.carouselbtn-right')
        const prevBtn = document.querySelector('.carouselbtn-left')
        const dotsNav = document.querySelector('.carousel-nav')
        const dots = Array.from(dotsNav.children)

        const slideWidth = slides[0].getBoundingClientRect().width;
        
        //slide positioning function
        let addedPixel = 0;
        const slidePosition = (slide,index)=>{
            const pixelCount = (slideWidth*index);
            pixelCount === 0 ?slide.style.left = `${pixelCount}px` :slide.style.left = `${(slideWidth*index)+(addedPixel+=19)}px`;
        };
        //move to slide functionality
        const moveToSlide = (track,currentSlide,targetSlide,amountToMoved)=>{
            track.style.transform = `translateX(-${amountToMoved})`;
            currentSlide.classList.remove('current-slide');
            setTimeout(function(){
                targetSlide.classList.add('current-slide');
                console.log('2sec to show');
            },1200);
        };

        //switching of indicator classname functionality
        const updateDots =(currentDot,targetDot)=>{
            currentDot.classList.remove('current-slide')
            targetDot.classList.add('current-slide')
        }

        const hideShowArrows = (targetIndex)=>{
            if(targetIndex === 0){
                prevBtn.classList.add('is-hidden');
                nextBtn.classList.remove('is-hidden');
            }else if(targetIndex === (slides.length - 1)){
                prevBtn.classList.remove('is-hidden');
                nextBtn.classList.add('is-hidden');
            }else{
                prevBtn.classList.remove('is-hidden');
                nextBtn.classList.remove('is-hidden');
            }
        }
        //arrange the slides next to each other
        slides.forEach(slidePosition);

        //prevBtn functionality
        prevBtn.addEventListener('click',e=>{
            const currentSlide  = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot  = dotsNav.querySelector('.current-slide');
            const prevDot  = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide=> slide === prevSlide)
            const amountToMoved = prevSlide.style.left;
            
            //move to the next slide
            moveToSlide(track,currentSlide,prevSlide,amountToMoved);

            //changing the classname of current and target indicator
            updateDots(currentDot,prevDot);  
            
            //hiding the slide direction btns
            hideShowArrows(prevIndex);
        });
    
        //nextBtn functionality
        nextBtn.addEventListener('click',e=>{
            const currentSlide  = track.querySelector('.current-slide');
            const currentSlideIndex = slides.findIndex(item=> item === currentSlide);

            //condition for large/small screen
            if((App.getBoundingClientRect().width) > 1260 && (currentSlideIndex === (slides.length - 3))) return;
            
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot  = dotsNav.querySelector('.current-slide');
            const nextDot  = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide=> slide === nextSlide)
            const amountToMoved = nextSlide.style.left;
    
            //move to the next slide
            moveToSlide(track,currentSlide,nextSlide,amountToMoved);

            //changing the classname of current and target indicator
            updateDots(currentDot,nextDot); 
            
            //hiding the slide direction btns
            hideShowArrows(nextIndex);
        });
        
        //nav-indicator functionality

        dotsNav.addEventListener('click',e=>{
            let targetDot = e.target.closest('.carousel-indicator');
            //end func if dot not clicked
            if(!targetDot) return;
            const currentSlide =track.querySelector('.current-slide');
            
            //dont slide of slideWindow has shows all remaining content
            const targetDotIndex = dots.findIndex(dot=> dot === targetDot);
            //condition for large/small screen
            if ((App.getBoundingClientRect().width > 1260) && (targetDotIndex > (slides.length - 3))) targetDot = dots[(slides.length - 3)];

            const currentDot = dotsNav.querySelector('.current-slide');
            const targetIndex = dots.findIndex(dot=> dot === targetDot)
            const targetSlide = slides[targetIndex];
            const amountToMoved = targetSlide.style.left;

            //move to slide 
            moveToSlide(track,currentSlide,targetSlide,amountToMoved);

            //changing the classname of current and target indicator
            updateDots(currentDot,targetDot);

            //hiding the slide direction btns
            hideShowArrows(targetIndex);
        })
       
    }, [])

  return (
    <div id="Courses" className="Courses">
        <div className="courses-container"> 
            <h1>Featured Courses</h1>

            <div className="Carousel courses-wrapper">
                <div className="carousel-btn carouselbtn-left is-hidden">
                    <IoIosArrowBack className='carousel-arrow'/>
                </div>
                <div className="carousel-container">
                    <ul className="carousel-track">
                        <li className="course carousel-slide current-slide">
                            <img src={heroImage2} alt="" />
                            <div className="course-content">
                                <h2>start for free</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                                <span className='btn2'>
                                    {!auth?.user ?
                                        <LinkR to='/login'>free trial</LinkR> :
                                        auth?.courseRoles.includes(5150) ?
                                                <LinkR to='/introduction'>introductions<FaVideo />
                                                </LinkR> :
                                                <LinkR to='/unauthorized'>unauthorized</LinkR>
                                    }
                                    
                                </span>
                            </div>
                        </li>
                        <li className="course carousel-slide">
                            <img src={heroImage2} alt="" />
                            <div className="course-content">
                                <h2>videography</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                                <span className='btn2'>
                                    <LinkS to='#'>Buy course $19</LinkS>
                                </span>
                            </div>
                        </li>
                        <li className="course carousel-slide">
                            <img src={heroImage2} alt="" />
                            <div className="course-content">
                                <h2>Cinematography</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                                <span className='btn2'>
                                    <LinkS to='#'>Buy course $25</LinkS>
                                </span>
                            </div>
                        </li>
                        <li className="course carousel-slide">
                            <img src={heroImage2} alt="" />
                            <div className="course-content">
                                <h2>Cinematography</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                                <span className='btn2'>
                                    <LinkS to='#'>Start your free trial</LinkS>
                                </span>
                            </div>
                        </li>
                        <li className="course carousel-slide">
                            <img src={heroImage2} alt="" />
                            <div className="course-content">
                                <h2>Cinematography</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.    Officia excepturi error suscipit veniam similique debitis adipisci aliquam saepe enim!</p>
                                <span className='btn2'>
                                    <LinkS to='#'>Start your free trial</LinkS>
                                </span>
                            </div>
                        </li> 
                    </ul>
                </div>
                <div className="carousel-btn carouselbtn-right">
                    <IoIosArrowForward className='carousel-arrow' />
                </div>

                <div className="carousel-nav">
                    <div className="carousel-indicator current-slide"></div>
                    <div className="carousel-indicator"></div>
                    <div className="carousel-indicator"></div>
                    <div className="carousel-indicator"></div>
                    <div className="carousel-indicator"></div>
                </div>
            </div>

        </div>    
    </div>
  )
}

export default Courses