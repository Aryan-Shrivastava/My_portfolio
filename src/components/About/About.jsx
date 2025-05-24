import React from 'react'
import './About.css'
import profile from '../../assets/about-profile.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            {/* <img src="" alt="" /> */}
        </div>  
        <div className="about-section">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>    
            <div className="about-right">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam natus sint consequatur suscipit quas illum consequuntur recusandae odio quae!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quos incidunt delectus ut nisi velit, nihil dolore similique iusto iste.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML, CSS, JavaScript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Operating System</p><hr style={{width:"50%"}} /></div>
            </div>
        </div> 
        <div className="about-achievements">
            
        </div>
    </div>
  )
}

export default About
