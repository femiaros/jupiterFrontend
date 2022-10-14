import Loading from "./Loading";
import CourseCenter from "./CourseCenter";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"; 
import { useNavigate, useLocation,useParams } from "react-router-dom";

const VideoPage = ({items}) => {
  const {vid,id} = useParams();
  const [videoTut, setVideoTut] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const AllCourse = items[0].courseData;
  const Course = AllCourse.find(course=> course.id == vid);
  const Video = Course.videos.find(video=> video.id == id);

  useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();

      const getVideo = async () => {
          try {
              const response = await axiosPrivate.get('/introtuts', {
                  signal: controller.signal
              });
              isMounted && setVideoTut(response.data); 
          } catch (err) {
              console.error(err);
              if (err?.response.status === 401){//403
                  // if RT xpires sent user to login, 'from' helps user get back to intro after logging in instead going to home page

                  navigate('/login', { state: { from: location }, replace: true });
              } 
              
          }
      }

      getVideo();

      return () => {
          isMounted = false;
          controller.abort();
      }
  }, [])
  return (
    <div className='VideoPage'>
        <div className="videoPage-header">
    
        </div>
        <div className="videoPage-body">
          <div className="videoPage-container">
            <div className="display-side">
              <div className="video-cover">
                {videoTut ? <iframe width="100%" height="96%" src="https://www.youtube.com/embed/Pj8u0gHPa_U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> :
                    <Loading/>
                }
                
              </div>
              <p className="video-title">
                {`${Video.id}# ${Video.title}`}
              </p>
            </div>
            <div className="display-list">
              <CourseCenter Course = {Course}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VideoPage