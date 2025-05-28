import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1dfdd507-0bda-4529-90ac-b69ad05444e4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            // Display a toast notification for success
            // if (window && window.toast) {
            //     window.toast.success("Form Submitted Successfully");
            // }
            alert("Form Submitted Successfully");
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, vero, quo blanditiis ratione rerum sequi, provident sapiente nisi neque quibusdam officia ipsum amet illo iste earum minima! Ad, odit amet.</p>
                    <div className="contact-details">

                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>aryan.s.github@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>9289570300</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Hyderabad, Telangana, India</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
