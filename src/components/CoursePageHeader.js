import {BsStarFill} from 'react-icons/bs';
import {BsStarHalf} from 'react-icons/bs';
import {BsStar} from 'react-icons/bs';
import {BsHeart} from 'react-icons/bs';
import {BsHeartFill} from 'react-icons/bs';
import {GiPadlock} from 'react-icons/gi';
import {GiPadlockOpen} from 'react-icons/gi';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const CoursePageHeader = ({Course}) => {
    const {auth} = useAuth();
    const [icon,setIcon] = useState(false);
    let ratings;
    
    if(Course.likes<=0) ratings = 0;
    if(Course.likes<5) ratings = 0.5;
    if(Math.floor(Course.likes/5)=== 1) ratings =1;
    if(Math.floor(Course.likes/5)=== 2) ratings =2;
    if(Math.floor(Course.likes/5)=== 3) ratings = 3;
    if(Math.floor(Course.likes/5)=== 4) ratings = 4;
    if(Math.floor(Course.likes/5) >= 5) ratings = 5;

    function react(e){
        const likeBtn = e.target.closest('.like-icon');
        // increment the like-count 
        icon? Course.likes-- : Course.likes++;

        //toggle the Icon State && change the icon 
        setIcon(prev=>!prev);
    }
  return (
    <div className='CoursePageHeader'>
        <div className="coursePageHeader-container">
            
            <div className="coursePageHeader-content">

                <div className="text">
                    <h1>{Course.title}</h1>
                    <p>{Course.description}</p>
                </div>
                
                <div className="coursePageHeader-anchors">
                    <h1>{Course.anchors.length > 1 ?
                         'anchors' :
                            'anchor'
                        }
                    </h1>
                    <div className="anchors-center">
                        {
                            Course.anchors.map(anchor=>(
                                <div className="anchor" key={anchor.id}> 
                                    <img src={anchor.imgsrc} alt="course anchor" />
                                    <div className="anchor-details">
                                        <span className="name">{anchor.name}</span>
                                    
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="coursePageHeader-ratings">
                    <span className="stars">
                        <span className="star-icons">
                            {
        
                                ratings > 0 && ratings <=0.5 ?
                                  <>  
                                  <BsStarHalf/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/> 
                                  </> :
                                ratings ===1 ?
                                  <>  
                                  <BsStarFill/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/> 
                                  </> :
                                ratings ===2 ?
                                  <>  
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/> 
                                  </> :
                                ratings ===3 ?
                                  <>  
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStar/>
                                  <BsStar/> 
                                  </> :
                                ratings ===4 ?
                                  <>  
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStar/> 
                                  </> :
                                ratings ===5 ?
                                  <>  
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/>
                                  <BsStarFill/> 
                                  </> :
                                <>  
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/>
                                  <BsStar/> 
                                </>
                            }
                            
                        </span>
                        <span className="star-text">
                            Ratings
                        </span>
                    </span>
                    <span className="like">
                        <small className='like-text'>
                            React
                            <small className='like-count'>{Course.likes}</small>
                        </small>
                        <span className='like-icon' 
                        onClick={(e)=>react(e)}
                        >
                            {icon? <BsHeartFill/> :
                                <BsHeart/>
                            }
                        </span>
                    </span>
                </div>

            </div>

            <div className="coursePageHeader-bg">
                <img src={Course.postalsrc} alt="background"/>
            </div>
            
        </div>

        <div className="coursePageHeader-access">

            <span className="access-icon">
                {auth?.user ?
                  <GiPadlockOpen/>
                :
                  <GiPadlock/>
                }
                
            </span>
            
        </div>
    </div>
  )
}

export default CoursePageHeader