import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from 'react-scroll';
import {RiPlayList2Line} from 'react-icons/ri';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {FiSearch} from 'react-icons/fi';

const Lastest = ({courses,search,setSearch}) => { 

    setTimeout(function(){
        // ****Components****
        const Container = document.querySelector('.lastest-container');
        const Wrapper = Container.querySelector('.cards-wrapper');
        const rightBtn = Container.querySelector('.scroll-right');

        const ContainerWidth = Container.getBoundingClientRect().width;
        const WrapperWidth = Wrapper.getBoundingClientRect().width;

        // ****Hide and show right Btn****
        WrapperWidth <= ContainerWidth ? 
            rightBtn.classList.add('hidden') :
            rightBtn.classList.remove('hidden');

    },1000)

    

    let distanceMoved =0;

    const scrollRight = (e)=>{
        const btn = e.target;
        const cardsWrapper = btn.nextElementSibling;
        const lastestContainer = cardsWrapper.parentElement.parentElement.parentElement;

        // ****Component widths****
        const lastestContainerWidth = lastestContainer.getBoundingClientRect().width;
        const cardsWrapperWidth = cardsWrapper.getBoundingClientRect().width;
        
        let slideWidth = (287+20);

        let limit = cardsWrapperWidth - slideWidth;
        
        if(distanceMoved > limit)return;
        
        distanceMoved = (distanceMoved + slideWidth) ;

        // ****hide right arrow Btn****
        if(distanceMoved >= (cardsWrapperWidth-287)){
            btn.classList.add('hidden');
        }
        // ****Show left arrow Btn****
        if (distanceMoved >= slideWidth){
            btn.previousElementSibling.classList.remove('hidden');
        } 
            
        (cardsWrapperWidth > lastestContainerWidth) && (distanceMoved < cardsWrapperWidth) ? 
            cardsWrapper.style.transform = `translateX(-${distanceMoved}px)` 
                : console.log('scroll not needed');
    }

    const scrollLeft = (e)=>{
        const btn = e.target;
        const cardsWrapper = btn.nextElementSibling.nextElementSibling;
        const lastestContainer = cardsWrapper.parentElement.parentElement.parentElement;

        // ****Component widths****
        const lastestContainerWidth = lastestContainer.getBoundingClientRect().width;
        const cardsWrapperWidth = cardsWrapper.getBoundingClientRect().width;

        let slideWidth = (287+20);

        if(distanceMoved === 0)return;
        
        distanceMoved = (distanceMoved - slideWidth) ;

        // ****show right arrow Btn****
        if(distanceMoved <= (cardsWrapperWidth-287)){
            btn.nextElementSibling.classList.remove('hidden');
        }

        (cardsWrapperWidth > lastestContainerWidth) && (distanceMoved >= 0) ? 
            cardsWrapper.style.transform = `translateX(-${distanceMoved}px)` 
                : console.log('scroll not needed');

        // ****set distanceMoved to zero on first card****
        if(distanceMoved < 287){ 
            distanceMoved = 0;
            // ****hide left arrow Btn****
            btn.classList.add('hidden');
        }
       
    }

    const handleChange = (e)=>{
        setSearch(e.target.value);

        const searchInput = e.target
        const lastestContainer = searchInput.parentElement.parentElement.parentElement;

        // ****Locating cardsWrapper Element****
        const cardsWrapper = lastestContainer.querySelector('.cards-wrapper');

        // ****Adjust cardsWrapper position back to origin****
        distanceMoved = 0;
        cardsWrapper.style.transform = `translateX(${distanceMoved}px)`;
    }

  return (
    <div className='Lastest'>
        <div className="lastest-container">
            <div className="search-bar">
                <form onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="search">Search Courses</label>
                    <input 
                        id='search'
                        type="text" 
                        placeholder='Search...'
                        value={search}
                        onChange={(e)=>handleChange(e)}
                    />
                    <FiSearch className="search-icon"/>
                </form>
            </div>

            <div className="populate">
                <div className="populate-heading">
                    {search === '' ? 
                        <h1>Lastest</h1> : 
                        courses.length === 0 ? 
                            <h1>Nothing found</h1> : 
                            <h1>Results <span>{courses.length}</span></h1>
                    }
                    
                    
                    <LinkS className="see-all"
                        to='Courses' 
                        smooth={true} 
                        duration={700} 
                        exact="true" 
                        offset={-90}
                    >see all
                    </LinkS>
                </div>
                <div className="populate-content">
                    <span className="scroll-left hidden" onClick={(e)=>scrollLeft(e)}>
                        <IoIosArrowBack/>
                    </span>

                    <span className="scroll-right" onClick={(e)=>scrollRight(e)}>
                        <IoIosArrowForward/>
                    </span>
                    
                    <div className="cards-wrapper">

                        {
                            courses.map(course=>(
                                <LinkR
                                    to={`/course/${course.id}`}
                                    className="card"
                                    key={course.id}

                                >
                                    <div className="card-img">
                                        <img src={course.postalsrc} alt="course-postal" />
                                        <div className="over">
                                            <h3>{course.title}</h3>
                                        </div>
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
    </div>
  )
}

export default Lastest