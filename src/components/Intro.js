import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate"; 
import { useNavigate, useLocation } from "react-router-dom";


const Intro = () => {

    const [intoTut, setIntroTut] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getIntroTUT = async () => {
            try {
                const response = await axiosPrivate.get('/introtuts', {
                    signal: controller.signal
                });
                isMounted && setIntroTut(response.data); 
            } catch (err) {
                console.error(err);
                if (err?.response.status === 401){//403
                    // if RT xpires sent user to login, 'from' helps user get back to intro after logging in instead going to home page

                    navigate('/login', { state: { from: location }, replace: true });
                } 
                
            }
        }

        getIntroTUT();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

  return (
    <div className="Intro">
        <div className="intro-container">
            <div className="intro-wrapper">
                
                <div className="intro-row">
                    <div className="intro-col video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/t33owpmMTfo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="intro-col video-details">
                        <h3>Introduction to Filmmaking for Beginners</h3>
                        <br />
                        <br />
                        <p>
                            Want to make good movies? Here's what i think you need to know
                            <br />
                            <br />
                           Host and Creator: San Heser    
                           <br />
                           <br /> 
                           Graded with FilmCovert - 10%
                        </p>
                    </div>
                </div>
                <div className="intro-row">
                    <div className="intro-col video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pj8u0gHPa_U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="intro-col video-details">
                        <h3>Introduction to Filmmaking for Beginners</h3>
                        <br />
                        <br />
                        <p>
                            Want to make good movies? Here's what i think you need to know
                            <br />
                            <br />
                           Host and Creator: San Heser    
                           <br />
                           <br /> 
                           Graded with FilmCovert - 10%
                        </p>
                    </div>
                </div>
                <div className="intro-row">
                    <div className="intro-col video-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3m7vhyFjtek" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className="intro-col video-details">
                        <h3>Introduction to Filmmaking for Beginners</h3>
                        <br />
                        <br />
                        <p>
                            Want to make good movies? Here's what i think you need to know
                            <br />
                            <br />
                           Host and Creator: San Heser    
                           <br />
                           <br /> 
                           Graded with FilmCovert - 10%
                        </p>
                    </div>
                </div>

            </div>
        </div>
        {/* {intoTut ? 
            <>  <p>Video 1</p> 
                <p>Video 2</p> 
                <p>Video 3</p> 
            </> : <> <p>no vid to display</p></>
        } */}

    </div>
  )
}

export default Intro