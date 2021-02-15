import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
                <div className="header_about">
                <a href="#about" >About-us</a>
                </div>

                <div className="header_about">
                   <a href="#contact" >Contact</a>
                </div>
                <div className="header_about">
                    <a href="#donate" >Donate</a>
                </div>
        </div>
    )
}

export default Header
