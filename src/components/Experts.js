
const Experts = ({expertsData}) => {

    


  return (
    <div className="Experts">
        <div className="experts-container">

            <h1>Meet Our Experts</h1>

            <div className="experts-wrapper">

                {expertsData.map((item)=>(
                    <div className="expert-col" key={item.id}>
                        <div className="upper">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="lower">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            
            </div>        
        </div>
    </div>
  )
}

export default Experts