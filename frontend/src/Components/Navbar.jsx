import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('token');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/studio', label: 'Studio' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}
        >
            <div className={`glass-pill flex items-center justify-between px-6 transition-all duration-500 ${scrolled ? 'py-3 w-[95%] max-w-5xl bg-[rgba(5,5,5,0.8)] shadow-[0_0_30px_rgba(0,0,0,0.5)]' : 'py-4 w-[90%] max-w-6xl'}`}>
                
                {/* Logo */}
                <div className="logo group">
                    <Link to="/" className="flex items-center gap-2">
                        <motion.div 
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className="w-6 h-6 rounded-full bg-white flex items-center justify-center overflow-hidden"
                        >
                            <div className="w-3 h-3 bg-black rounded-full" />
                        </motion.div>
                        <h3 className='text-xl font-display font-bold text-white tracking-[0.2em] group-hover:text-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all'>
                            NIRVANA
                        </h3>
                    </Link>
                </div>
                
                {/* Desktop Links */}
                <div className="pages hidden md:block">
                    <ul className='flex items-center gap-8'>
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.path} className="relative group">
                                    <Link 
                                        to={link.path} 
                                        className={`text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}
                                    >
                                        {link.label}
                                    </Link>
                                    {isActive && (
                                        <motion.div 
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                
                {/* Actions */}
                <div className="icons flex items-center gap-4">
                    {token ? (
                        <button onClick={handleLogout} className="text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors uppercase">
                            Logout
                        </button>
                    ) : (
                        <Link to="/login" className="pill-btn pill-btn-primary flex items-center gap-2 text-xs font-mono tracking-widest uppercase">
                            Sign In <FaUser className="text-[10px]" />
                        </Link>
                    )}
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;