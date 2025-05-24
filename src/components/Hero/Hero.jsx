import React from 'react'
import './Hero.css'
import profile from "../../assets/profile.png"
import TypedText from '../TypedText/TypedText'


const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile} alt="" />
            <h1><span>I'm Aryan Shrivastava</span> and I'm a passionate <TypedText/>.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae nesciunt, atque harum labore nisi ipsam voluptatum blanditiis assumenda vitae optio!</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}



export default Hero
