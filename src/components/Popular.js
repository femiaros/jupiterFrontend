import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from "react-router-dom";
import useAuth from '../hooks/useAuth';
import autoPageUp from '../hooks/autoPageUp';
import {RiPlayList2Line} from 'react-icons/ri';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';

const Popular = ({popularCourses,Title}) => {
    const {seeAll} = useAuth(); 
    //Filter top 6 courses
    // popularCourses = popularCourses.filter((course,i) => i >= (popularCourses.length-6) );
    //Sort Top courses acccording to popularity
    popularCourses = popularCourses.sort((course1,course2)=>course2.likes > course1.likes? 1: -1)

    setTimeout(function(){
        // ****Components****
        const Container = document.querySelector('.popular-container');
        const Wrapper = Container.querySelector('.cards-wrapper');
        const rightBtn = Container.querySelector('.scroll-right');

        const ContainerWidth = Container.getBoundingClientRect().width;
        const WrapperWidth = Wrapper.getBoundingClientRect().width;

        // ****Hide and show right Btn****
        WrapperWidth <= ContainerWidth ? 
            rightBtn.classList.add('hidden') :
            rightBtn.classList.remove('hidden');

    },1000)

    

    let popularDistanceMoved =0;

    const scrollRight = (e)=>{
        const btn = e.target;
        const cardsWrapper = btn.nextElementSibling;
      
        const popularContainer = cardsWrapper.parentElement.parentElement;

        // ****Component widths****
        const popularContainerWidth = popularContainer.getBoundingClientRect().width;
        const cardsWrapperWidth = cardsWrapper.getBoundingClientRect().width;
        
        let slideWidth = (287+20);

        let limit = cardsWrapperWidth - slideWidth;
        
        if(popularDistanceMoved > limit)return;
        
        popularDistanceMoved = (popularDistanceMoved + slideWidth) ;

        // ****hide right arrow Btn****
        if(popularDistanceMoved >= (cardsWrapperWidth-287)){
            btn.classList.add('hidden');
        }
        // ****Show left arrow Btn****
        if (popularDistanceMoved >= slideWidth){
            btn.previousElementSibling.classList.remove('hidden');
        } 
            
        (cardsWrapperWidth > popularContainerWidth) && (popularDistanceMoved < cardsWrapperWidth) ? 
            cardsWrapper.style.transform = `translateX(-${popularDistanceMoved}px)` 
                : console.log('scroll not needed');
    }

    const scrollLeft = (e)=>{
        const btn = e.target;
        const cardsWrapper = btn.nextElementSibling.nextElementSibling;
        const popularContainer = cardsWrapper.parentElement.parentElement;

        // ****Component widths****
        const popularContainerWidth = popularContainer.getBoundingClientRect().width;
        const cardsWrapperWidth = cardsWrapper.getBoundingClientRect().width;

        let slideWidth = (287+20);
        
        popularDistanceMoved = (popularDistanceMoved - slideWidth) ;

        if(popularDistanceMoved <= 0) popularDistanceMoved = 0;

        // ****show right arrow Btn****
        if(popularDistanceMoved <= (cardsWrapperWidth-287)){
            btn.nextElementSibling.classList.remove('hidden');
        }

        (cardsWrapperWidth > popularContainerWidth) && (popularDistanceMoved >= 0) ? 
            cardsWrapper.style.transform = `translateX(-${popularDistanceMoved}px)` 
                : console.log('scroll not needed');

        // ****set popularDistanceMoved to zero on first card****
        if(popularDistanceMoved < 287){ 
            popularDistanceMoved = 0;
            // ****hide left arrow Btn****
            btn.classList.add('hidden');
        }
       
    }

    const loadPage = ()=>{
        autoPageUp();
    }

  return (
    <div className='Popular'>
        <div className="popular-container">

            <div className="popular-heading">

                <h1>{Title} <span>{popularCourses.length}</span></h1>
                
                {seeAll? 
                    <LinkS className="see-all"
                        to='Courses' 
                        smooth={true} 
                        duration={700} 
                        exact="true" 
                        offset={-90}
                    >see all
                    </LinkS>
                    : 
                        <>
                        </>
                    }
            </div>

            <div className="popular-content">

                <span className="scroll-left hidden" onClick={(e)=>scrollLeft(e)}>
                    <IoIosArrowBack/>
                </span>

                <span className="scroll-right" onClick={(e)=>scrollRight(e)}>
                    <IoIosArrowForward/>
                </span>
                
                <div className="cards-wrapper">

                    {
                        popularCourses.map((course,i)=>(
                            <LinkR
                                to={`/course/${course.id}`}
                                className="card"
                                key={course.id}
                                onClick={loadPage}
                            >
                                <div className="card-img">
                                    <img src={course.postalsrc} alt="course-postal" />
                                    <div className="over">
                                        <h3>{course.title}</h3>
                                    </div>
                                    <span className="rank">{i+1}</span>
                                    <div className="playlist">
                                        <RiPlayList2Line/>
                                        <span>
                                            {course.videos.length}
                                        </span>
                                    </div>
                                </div>
                                <p className="card-title">{`# ${course.title}`}</p>
                            </LinkR>
                        ))
                    }

                                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Popular