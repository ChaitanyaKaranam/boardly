import React from 'react';
import '../styles/Contact.scss';
import mail from '../images/svg/mail.svg'

export default () => {
    return(
        <div className="contact__wrapper">
            <div className="image__wrapper">
                <img src={mail} alt="contact us"/>
            </div>
            <div className="contact__content">
                <span>Mail us at <span className="red">contact@boardly.com</span></span>
                <span className="grey sub-heading">Subscribe to our Newsletter</span>
                <input type="email" placeholder="Enter Email Address"/>
            </div>
        </div>
    )
}