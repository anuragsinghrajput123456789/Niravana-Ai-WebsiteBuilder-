// src/pages/ContactPage.jsx

import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Contact = () => {
    return (
        <div className="page-container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                {/* Contact Form */}
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn" style={{ width: '100%', padding: '1rem' }}>
                        Send Message
                    </button>
                </form>

                {/* Contact Info */}
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="contact-item">
                        <FiMail className="icon" />
                        <span>support@nirvana-ai.com</span>
                    </div>
                    <div className="contact-item">
                        <FiPhone className="icon" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="contact-item">
                        <FiMapPin className="icon" />
                        <span>123 AI Avenue, Tech City, USA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;