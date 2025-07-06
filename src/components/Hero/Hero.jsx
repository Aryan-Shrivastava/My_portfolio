import React from 'react'
import './Hero.css'
import profile from "../../assets/profile.png"
import TypedText from '../TypedText/TypedText'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id="hero" className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Aryan Shrivastava</span> and I'm a passionate <TypedText />.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt, atque harum labore nisi ipsam voluptatum blanditiis assumenda vitae optio!</p>
            <div className="hero-action">
                <AnchorLink className='anchor-link' offset={15} href='#contact'><div className="hero-connect">Connect with me</div></AnchorLink>
                <a href="public\Aryan_Shrivastava_Resume.pdf" target='_blank' rel="noopener noreferrer" className='hero-resume-link'><div className="hero-resume">My resume</div></a>
            </div>
        </div>
    )
}



export default Hero
