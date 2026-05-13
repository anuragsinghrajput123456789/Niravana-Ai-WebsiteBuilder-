import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero-bg.png';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-primary)] pt-32 pb-24 relative overflow-hidden group">
            
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--brand-red)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

            {/* Animated Skull Background */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0 mix-blend-luminosity"
            >
                <motion.img 
                    src={heroBg} 
                    alt="Background Skull" 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                        duration: 8, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-full h-full object-contain grayscale blur-[4px] group-hover:grayscale-0 group-hover:blur-[2px] transition-all duration-1000"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 animate-fade-in">
                
                <div className="text-center mb-16">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--brand-red)] uppercase mb-4">Connect With Us</h2>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-wide">Get In Touch</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Contact Form */}
                    <div className="glass-card p-8 md:p-12 animate-fade-in animate-delay-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Full Name</label>
                                <input type="text" id="name" name="name" className="dark-input" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Email Address</label>
                                <input type="email" id="email" name="email" className="dark-input" placeholder="john@example.com" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Message</label>
                                <textarea id="message" name="message" rows="5" className="dark-input resize-none" placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="pill-btn pill-btn-primary w-full py-4 tracking-widest uppercase">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center animate-fade-in animate-delay-200">
                        <div className="glass-card p-8 md:p-12 space-y-10 bg-transparent border-none shadow-none">
                            <h3 className="text-2xl font-display font-bold text-white tracking-wider mb-8">Contact Information</h3>
                            
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center text-[var(--brand-red)] group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all">
                                    <FiMail className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Email</p>
                                    <p className="text-white font-light">support@nirvana-ai.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center text-[var(--brand-red)] group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all">
                                    <FiPhone className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Phone</p>
                                    <p className="text-white font-light">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center text-[var(--brand-red)] group-hover:bg-[var(--brand-red)] group-hover:text-white transition-all">
                                    <FiMapPin className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1">Location</p>
                                    <p className="text-white font-light">123 AI Avenue<br/>Tech City, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;