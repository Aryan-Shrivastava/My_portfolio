import React from 'react'
import './footer.css'
import footer_logo from '../../assets/footer_icon.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div id="footer" className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="footer logo" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod delectus perferendis doloremque error quasi voluptas</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    &copy; {new Date().getFullYear()} Aryan Shrivastava. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
