import {Link as LinkR} from "react-router-dom";
import {FaLongArrowAltRight} from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import autoPageUp from '../hooks/autoPageUp';
import {useEffect} from 'react';

const CourseCenter = ({Course}) => {
    const {auth} = useAuth();

    useEffect(() => {
        autoPageUp();
    }, [])

    const loadPage = ()=>{
        autoPageUp();
    };

  return (
    <div className="coursePageBody-center">

        {
            Course?.videos.map((item,i)=>(
            <div className='coursePageBody-item' key={item.id}>
                <div className="item-number">{i+1}</div>

                <div className="item-image">
                <img src={Course.postalsrc} alt="topic postal" />
                </div>

                <div className="item-details">
                <span className="title">{item.title}</span>

                <span className="duration">{item.duration}</span>

                <LinkR
                    to={auth?.user ? `/course/${Course.id}/${item.id}` : '/login'}
                    className="arrow"
                    key={item.id}
                    onClick={loadPage}
                >
                    <FaLongArrowAltRight/>
                </LinkR>
        
                </div>

            </div>
            ))
        }
        
    </div>
  )
}

export default CourseCenter