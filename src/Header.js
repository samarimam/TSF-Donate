import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
                <div className="header_about">
                    <span>About-us</span>
                </div>

                <div className="header_about">
                   <span>Contact</span>
                </div>
                <div className="header_about">
                    <span>Donate</span>
                </div>
        </div>
    )
}

export default Header
