import React from 'react'
import './Contact.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return (
        <div className="contact" id="contact">
             <h2>Address</h2>
             <p>Samar Imam</p>
            <p>Jamia Millia Islamia</p>
            <span><a href="https://www.linkedin.com/in/samar-imam-7922211b7/"><LinkedInIcon /></a>
            <a href="https://github.com/samarimam?tab=repositories"><GitHubIcon /></a>
            </span>

        </div>
    )
}

export default Contact
