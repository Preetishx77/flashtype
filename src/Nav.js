import React from 'react'
import './Nav.css'
import logo from './logo.png'
import github from './33.png'

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav-left">
            
            <img src={logo} className="flash-logo" alt="ll"/><p className="class-logo-text">FLASH TYPE</p>
            </div>
            <div className="nav-right">
                <a target="_blank"
                className="nav-link"
                href="https://github.com/Preetishx77"
                rel="noreferrer">
                    <img src={github} className="right-img"
                    alt="githublogo"/>
                </a>
            </div>
            
            
        </div>
    )
}

export default Nav
