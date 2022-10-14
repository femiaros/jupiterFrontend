import {Link as LinkR} from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Hero = ({heroData}) => {
  const {auth} = useAuth();
  heroData = heroData[0]
  return (
    <div id="Hero" className="Hero">

        <span className='overflow'></span>
      
        <div className="vid-wrapper">
          <video src={heroData.bgVideo} autoPlay muted loop >
          </video>
        </div>
        <div className="hero-content">
          <div className="herocol1">
            <h1>{heroData.heading1}</h1>
            <p>{heroData.paragraph}</p>
            <h3>{heroData.heading2}</h3>

            <div className="btn-container">

              {auth.user?(
                  <span className='btn2 btn-extra'>
                    <LinkR to='/introduction'>{heroData.button2}</LinkR>
                  </span>
                ):(
                  <span className='btn2'>
                    <LinkR to='/register'>{heroData.button}</LinkR>
                  </span>
                )}
              
            </div>
            
          </div>
          <div className="herocol2">

            <div className="slider">
              <figure>
                {
                  heroData.images.map(img =>(
                    <div className="img-wrapper" key={img.id}>
                      <img src={img.src} alt="" />
                      <div className="over">
                        <h5>{img.detail}</h5>
                      </div>
                    </div>
                  ))
                }
              </figure>     
            </div>

          </div>
        </div>          
                  
    </div>
  )
}

export default Hero