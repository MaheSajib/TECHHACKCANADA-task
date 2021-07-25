import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <footer className="container p-3">
                <p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
                <p>Copyright © {(new Date()).getFullYear()} Movie World. All Rights Reserved.</p>
            </footer>
            <div className="social-section container p-3 d-flex">
                <div className=" col-md-6">
                    <FontAwesomeIcon className="icon-section mx-2" icon={faFacebook} />
                    <FontAwesomeIcon className="icon-section mx-2" icon={faTwitter} />
                    <FontAwesomeIcon className="icon-section mx-2" icon={faInstagram} />
                </div>
                <div className="banner col-md-6">
                    <img src="/images/en_apple.png" alt="" />
                    <img src="/images/en_google.png" alt="" />
                    <img src="/images/en-MS.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;