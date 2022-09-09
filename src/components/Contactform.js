import {AiOutlineHome} from 'react-icons/ai';
import {MdOutlineTabletMac} from 'react-icons/md';
import {AiOutlineMail} from 'react-icons/ai';
import { useState, useEffect } from 'react';


const Contactform = () => {

    const [message,setMessage] = useState('');
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [subject,setSubject] = useState('');

    useEffect(() => {

        let isMounted = true;

            //start of formspree code

            // get the form elements defined in your form HTML above

            var form = document.querySelector("#my-form");
            // var button = document.querySelector(".submit");
            var status = document.querySelector(".status");
            

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                console.log('success ran')
                status.innerHTML = "Submitted, Thanks!";
                status.classList.add("success")

                setTimeout(function(){
                    status.innerHTML = "";
                    status.classList.remove("success")  
                },4000)
            }

            function error() {
                status.innerHTML = "Oops! There was a problem.";
                console.log('error ran')
                status.classList.add("error")
                setTimeout(function(){
                    status.innerHTML = "";
                  status.classList.remove("error")  
                },4000)
            }

            // handle the form submission event

            form.addEventListener("submit", function (ev) {
                ev.preventDefault();

                setMessage('');
                setName('');
                setMail('');
                setSubject('');

                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
                
            });
           
       

        // helper function for sending an AJAX request

        function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function () {
                
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    isMounted && success(xhr.response, xhr.responseType);
                } else {
                    isMounted && error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
        //end of formspree code

        return () => {
            isMounted = false;
        }

    }, [])
 

  return (
    <div className='Contactform'>
        <div className="Contactform-container">
            <h2>Get in touch</h2>
            <form action="https://formspree.io/f/mpzoyyok" method="POST" id='my-form' >

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder='Enter Message' 
                        cols="30" 
                        rows="10"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        required
                    >
                    </textarea>
                </div>

                <div className="form-group group2">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text" 
                        id="name" 
                        autoComplete="off"
                        placeholder='Name'
                        //  onChange={(e)=>{(e.target.value)}} 
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                </div>
                
                <div className="form-group group2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email" 
                        id="email" 
                        placeholder='Email'
                        autoComplete="off"
                        //  onChange={(e)=>{(e.target.value)}} 
                        name='email'
                        onChange={(e) => setMail(e.target.value)}
                        value={mail}
                        required
                    />
                </div>
            
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text" 
                        id="subject" 
                        placeholder='Subject'
                        autoComplete="off"
                        //  onChange={(e)=>{(e.target.value)}} 
                        name='subject'
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        required
                    />
                </div>
                <button type='submit' className="contact-btn">Submit</button>
                <div className="status"></div>
            </form>
            <div className="contactform-extra-wrapper">
                <div className="contactform-extra">
                    <div className="extra-icon">
                        <AiOutlineHome className='icon'/>
                    </div>
                    <div className="extra-details">
                        <h3>Bodija, Ibadan</h3>
                        <h4>Bon Hotel, No 1986</h4>
                    </div>
                </div>
                <div className="contactform-extra">
                    <div className="extra-icon">
                        <MdOutlineTabletMac className='icon'/>
                    </div>
                    <div className="extra-details">
                        <h3>+234 901 436 6762</h3>
                        <h4>Available 24/7</h4>
                    </div>
                </div>
                <div className="contactform-extra">
                    <div className="extra-icon">
                        <AiOutlineMail className='icon'/>
                    </div>
                    <div className="extra-details">
                        <h3>ourmail@gmail.com</h3>
                        <h4>Send us your query anytime!</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contactform