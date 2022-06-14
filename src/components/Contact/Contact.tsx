import React, { useState } from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [email,setEmail]=useState("")
const [message,setMessage]=useState("")

const handleSend=()=>{
  emailjs
        .send(
          'gmail',
          'template_u32h6xn',
          {
            email:email,
            message: message,
          },
          'utKxKMM36JZObA7Kb'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
          setEmail("")
          setMessage("")
}
  return (
    <div id="contact" >
        <h2>Get in Touch</h2>
        <div id="contact-form">
            {/* <form method="POST" > */}
                <input type="email" name="_replyto" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <textarea name="message" placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)} required />
                <button type="submit" onClick={handleSend}>Send</button>
            {/* </form> */}
        </div>
    </div>
  );
}

export default Contact;