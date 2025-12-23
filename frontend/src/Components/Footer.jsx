import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-4 md:px-8 lg:px-[120px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="brand-section mb-6 lg:mb-0">
            <h3 className='text-3xl font-bold bg-gradient-to-br from-rose-800 via-blue-700 to-rose-900 bg-clip-text text-transparent'>
              Nirvana-Ai
            </h3>
            <p className="mt-4 text-sm">
              Harnessing the power of AI to bring you closer to digital enlightenment. Your journey to intelligent solutions starts here.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="links-section">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Features</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="resources-section">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 hover:font-semibold transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="connect-section">
            <h4 className="text-lg font-semibold text-gray-200 mb-4">Connect With Us</h4>
            <div className="flex items-center space-x-4 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                <FaGithub className='text-2xl' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                <FaTwitter className='text-2xl' />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                <FaLinkedin className='text-2xl' />
              </a>
              <a href="mailto:contact@nirvana-ai.com" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                <MdEmail className='text-2xl' />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Nirvana-Ai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;