import {FaQuoteRight} from 'react-icons/fa';

const Testimonial = ({testimonialData}) => {

  return (
    <div id="Testimonial" className="Testimonial">
        <div className="testimonial-container">
            <marquee scrollamount="34">
                <p>
                    Making the Future of Filmmaking •
                </p>
            </marquee>
            {/* <marquee direction = "up">This is basic example of marquee</marquee> */}
            <h1>What others are saying</h1>
            <div className="testimonial-wrapper">

                {
                    testimonialData.map((item)=>(
                        <div className="testimony" key={item.id}>
                            <span className='quote'>
                                <FaQuoteRight className='quote-icon'/>
                            </span>
                            <p> {item.comment} </p>
                            <div className="witness">
                                <img src={item.img} alt="" />
                                <h3 className='name'>{item.name}</h3>
                            </div>
                        </div>
                    ))
                }
               
            </div>
        </div>
    </div>
  )
}

export default Testimonial