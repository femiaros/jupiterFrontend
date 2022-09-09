import {AiOutlineCheck} from 'react-icons/ai';
import {TbArrowCurveRight} from 'react-icons/tb';



const About = ({aboutData}) => {


  return (
    <div id='About' className="About">
        <div className="about-container">

            {aboutData.map((item)=>(
                item.id === 1 ?
                    <div className="aboutcol1" key={item.id}>
                        <div className="blob"><TbArrowCurveRight className='blob-icon'/></div>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <ul>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[0]}</span>
                            </li>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[1]}</span>
                            </li>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[2]}</span>
                            </li>
                        </ul>
                    </div>  : item.id === 2 ? 
                    
                    <div className="aboutcol2" key={item.id}>
                        <img src={item.img} alt="" />
                    </div>   : item.id === 3 ? 

                    <div className="aboutcol1 col3" key={item.id}>    
                        <h1>{item.title}</h1>
                        
                        <ul>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[0]}</span>
                            </li>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[1]}</span>
                            </li>
                            <li>
                                <span className='check'><AiOutlineCheck/></span>
                                <span className='text'>{item.list[2]}</span>
                            </li>
                        </ul>
                    </div>  : item.id === 4 ?

                    <div className="aboutcol2 col4" key={item.id}>
                        <img src={item.img} alt="" />
                    </div> : ''
                            

            ))}

            {/* <div className="aboutcol1">
                <div className="blob"><TbArrowCurveRight className='blob-icon'/></div>
                <h1>Learn new skills online with top educators</h1>
                <p>The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.</p>
                <ul>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Techniques to engage effectively with vulnerable children and young people.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together. Online learning is as easy and natural.</span>
                    </li>
                </ul>
            </div>
            <div className="aboutcol2">
                <img src={teacher} alt="" />
            </div>

            <div className="aboutcol1 col3">    
                <h1>Learner outcomes on courses you will take</h1>
                
                <ul>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Techniques to engage effectively with vulnerable children and young people.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together.</span>
                    </li>
                    <li>
                        <span className='check'><AiOutlineCheck/></span>
                        <span className='text'>Join millions of people from around the world learning together. Online learning is as easy and natural.</span>
                    </li>
                </ul>
            </div>
            <div className="aboutcol2 col4">
                <img src={blobbed} alt="" />
            </div> */}
        </div>
    </div>
  )
}

export default About