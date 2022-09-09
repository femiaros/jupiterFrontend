import {TbSend} from 'react-icons/tb';
import { useState } from 'react';
const Subscribe = () => {
    const [email,setEmail] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setEmail('');
    }

  return (
    <div id="Subscribe" className="Subscribe">
        <div className="subscribe-container">
            <div className="subcol1">
                <h2>Subscribe</h2>
                <p>Join our community to take advantage of personal insights, techniques, and skills from Nollywood professionals. They put in the time and effort so you don’t have to!</p>
            </div>
            <div className="subcol2">
                <form onSubmit={handleSubmit}>
                    <input
                     type="email" 
                     id="sub" 
                     autoComplete="off"
                     placeholder='Email'
                     onChange={(e)=>{setEmail(e.target.value)}} 
                     value = {email}
                     required
                    />
                    <button className="send-sub">
                        <TbSend className='subIcon' />
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Subscribe