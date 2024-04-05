import React, { useState } from 'react'
import './contacts.css'

export const Contacts = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e879c07b-b0d7-41ff-ab6c-d1e9bfe22d17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}

    const [formData, setFormData]=useState({username:"",phone:"",message:""})

    function handlechange(event){
        setFormData(()=>{
            return {
                
                [event.target.name]:event.target.value
            }
        })
    }
    
  return (
    <div className='message'>
        <div className="declare">
            <div className="head">
            <h3>Send us a message</h3>
            <i class="fa-solid fa-envelope-open"></i>
            </div>
            <h5>Feel free to reach us through the contact form or find our contact information below.Your feedback, questions and insights are important in ensuring that we continue serving the society with farm fresh Products </h5>
            <div className='coordinate'>
            <i class="fa-solid fa-envelope"></i>
            <p>Contact@Edusity.org</p>
            </div>
            <div className='coordinate'>
            <i class="fa-solid fa-phone"></i>
            <p>+22-5475-6516-329</p>
            </div>
            <div className='coordinate'>
            <i class="fa-solid fa-location-dot"></i>
            <p>37 washington state</p>
            </div>
        </div>
        <div className="form">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input onChange={handlechange} type="text" value={formData.username} name='username' id='name' placeholder='Your name' required/>
                <label htmlFor="number">Phone Number</label>
                <input onChange={handlechange} type="number" value={formData.email} name='phone' id='number' placeholder='Your phone number'required />
                <label htmlFor="message">Your Message</label>
                <textarea onChange={handlechange} name="message" value={formData.message} id="message"rows="6" placeholder='Enter you message' required/>
                <button>Submit now</button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}
