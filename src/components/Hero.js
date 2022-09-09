import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Hero = ({heroData}) => {
  const {auth} = useAuth();
  heroData = heroData[0]
  return (
    <div id="Hero" className="Hero">
        
    
       
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

              {heroData.images.map(img => (
                img.id === 1 ? <img src={img.src} key={img.id} className='heroimg1' alt="" /> :
                    <img src={img.src} key={img.id} className='heroimg2' alt="" />
              ))}
              
              
            </div>
          </div>
        
      

    </div>
  )
}

export default Hero