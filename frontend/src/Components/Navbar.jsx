import React from 'react';
import { IoMdMoon } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="nav flex items-center justify-between px-4 md:px-8 lg:px-[120px] h-[70px] bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
            <div className="logo">
                <Link to="/">
                    <h3 className='text-2xl font-bold bg-gradient-to-br from-rose-800 via-blue-700 to-rose-900 bg-clip-text text-transparent'>Nirvana-Ai</h3>
                </Link>
            </div>
            <div className="pages hidden md:block">
                <ul className='flex font-semibold items-center gap-8 text-gray-300'>
                    <li className='hover:text-purple-400 transition-colors cursor-pointer'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-purple-400 transition-colors cursor-pointer'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:text-purple-400 transition-colors cursor-pointer'>
                        <Link to="/contact">Contact-Us</Link>
                    </li>
                </ul>
            </div>
            <div className="icons flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                    <IoMdMoon className="text-xl" />
                </button>

                {token ? (
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm font-semibold bg-red-600/20 text-red-400 border border-red-600/50 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                    >
                        Logout
                    </button>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                            Login
                        </Link>
                        <Link to="/signup" className="px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20">
                            Sign Up
                        </Link>
                    </div>
                )}

                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-white">
                    <FaGithub className='text-xl' />
                </a>
            </div>
        </div>
    );
}

export default Navbar;