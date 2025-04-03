import React from 'react';
import "../styles/Footer.css";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src="/src/assets/logo.png" alt="Netflix Logo" className="footer-logo" />
                <p className='footer-text'>© 2023 Netflix Demo. All rights reserved.</p>
                <div className='footer-links'>
                    <a href="/terms" >Terms of Service</a>
                    <a href="/privacy" >Privacy Policy</a>
                    <a href="/contact" >Contact Us</a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;