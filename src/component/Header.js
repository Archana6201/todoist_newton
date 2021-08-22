import React from 'react'
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="nav-img">
                   <img className="img" src={logo} alt="todoist" ></img>
                </div>
            </nav>
        </header>
    )
}

export default Header
