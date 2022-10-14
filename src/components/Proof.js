const Proof = ({tvLogos}) => {
  return (
    <div className="tv-proof">
        {
          tvLogos.map(item=>(
            <div className="tv-logos" key={item.id}>
              <img src={item.src} alt="" />
            </div>
          ))
        }
    </div>
  )
}

export default Proof