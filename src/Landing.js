import React from 'react'
import './Landing.css'
import runner from './runner4.jpg'
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <div className="typewriter-container">
                <Typewriter
                 options={{
            strings: ['Fast?', 'Correct?','Quick?'],
            autoStart: true,
            loop: true,
   }}
 />

                </div>
            </div>
        <div  data-aos="fade-light" className="landing-right">
            <img className="bolt-image" src={runner} alt="hero"/>
        </div>
            
        </div>
    )
}

export default Landing
