import Pageheader from "./Pageheader"
import { useNavigate } from "react-router-dom"
const Unauthorized = ({items}) => {

  const navigate = useNavigate();
  const goBack = ()=> navigate(-1);

  const pageHeader = items[0].unauthorizedPageHeader[0]
  
  return (
    <div className="Unauthorized">
      <Pageheader pageHeader={pageHeader}/>
      <div className="unauthorized-container">
        <span className="Back" onClick={goBack}>Go Back</span>
      </div>
        
    </div>
  )
}

export default Unauthorized