import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 text-gray-500 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="brand-section mb-6 lg:mb-0">
            <Link to="/">
                <h3 className='text-3xl font-display font-bold text-white tracking-widest mb-6'>
                    NIRVANA<span className="text-[var(--brand-red)]">.</span>
                </h3>
            </Link>
            <p className="text-sm font-light leading-relaxed">
              Redefining the standards of web development by embracing AI, celebrating individuality, and nurturing raw creativity.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="links-section">
            <h4 className="text-xs font-display font-bold text-white tracking-[0.2em] uppercase mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link to="/" className="hover:text-[var(--brand-red)] transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--brand-red)] transition-colors duration-300">Who We Are</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--brand-red)] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="resources-section">
            <h4 className="text-xs font-display font-bold text-white tracking-[0.2em] uppercase mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a href="#" className="hover:text-[var(--brand-red)] transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--brand-red)] transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="connect-section">
            <h4 className="text-xs font-display font-bold text-white tracking-[0.2em] uppercase mb-6">Socials</h4>
            <div className="flex items-center space-x-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
                <FaGithub className='text-xl' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
                <FaTwitter className='text-xl' />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300">
                <FaLinkedin className='text-xl' />
              </a>
              <a href="mailto:contact@nirvana-ai.com" className="text-gray-500 hover:text-[var(--brand-red)] transition-colors duration-300">
                <MdEmail className='text-xl' />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light tracking-wider">
            &copy; {new Date().getFullYear()} NIRVANA AI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-red)] animate-pulse"></span>
            <span className="text-xs font-display tracking-widest uppercase">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;