import React, { useState } from 'react';
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { FaUser, FaTwitter, FaLinkedin, FaGithub, FaHeart, FaRegPaperPlane } from "react-icons/fa";
import { RiCustomerService2Fill, RiInstagramFill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 3000);
            setEmail('');
        }
    };

    return (
        <>
            <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pt-16 pb-8 px-4 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse-medium"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                        {/* Brand section */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                                Nirvana-Ai
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Transforming the future with artificial intelligence. Creating solutions that empower businesses and individuals alike.
                            </p>
                            <div className="flex space-x-5">
                                {[
                                    { Icon: FaTwitter, color: "hover:text-cyan-400" },
                                    { Icon: FaLinkedin, color: "hover:text-blue-400" },
                                    { Icon: FaGithub, color: "hover:text-gray-300" },
                                    { Icon: RiInstagramFill, color: "hover:text-pink-400" }
                                ].map(({ Icon, color }, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className={`text-gray-400 transition-all duration-300 transform hover:scale-110 ${color}`}
                                    >
                                        <Icon className="text-xl" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white flex items-center">
                                <RiCustomerService2Fill className="mr-2 text-cyan-400" />
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {['Home', 'Features', 'Solutions', 'Pricing', 'About Us'].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center group text-sm"
                                        >
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-cyan-300 transition-colors duration-300"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white flex items-center">
                                <BiSolidOffer className="mr-2 text-purple-400" />
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {['Documentation', 'API Reference', 'Community', 'Blog', 'Support'].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-purple-300 transition-all duration-300 flex items-center group text-sm"
                                        >
                                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-purple-300 transition-colors duration-300"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-6">
                            <h4 className="text-lg font-semibold text-white flex items-center">
                                <FaRegPaperPlane className="mr-2 text-cyan-400 animate-bounce" />
                                Stay Updated
                            </h4>
                            <p className="text-gray-300 text-sm">Subscribe to our newsletter for the latest updates</p>
                            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="px-4 py-3 w-full bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-500 text-sm transition-all duration-300"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm font-medium flex items-center justify-center shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group"
                                >
                                    <span className={`transition-all duration-300 ${subscribed ? 'opacity-0' : 'opacity-100'}`}>
                                        Subscribe Now
                                    </span>
                                    <span className={`absolute transition-all duration-300 ${subscribed ? 'opacity-100' : 'opacity-0'}`}>
                                        Thank You!
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm flex items-center mb-4 md:mb-0">
                            © {new Date().getFullYear()} Nirvana-Ai. Made with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by Nirvana Team
                        </p>
                        <div className="flex items-center space-x-6">
                            {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-gray-400 hover:text-cyan-300 transition-all duration-300 text-sm"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;