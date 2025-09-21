import React from 'react'
import { IoMdMoon } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
    return (
        <>
            <div className="nav flex items-center justify-between px-4 md:px-8 lg:px-[120px] h-[70px] bg-gradient-to-r from-gray-900 to-black border-b border-gray-800">
                <div className="logo">
                    <h3 className='text-2xl font-bold bg-gradient-to-br from-violet-400 to-purple-600 bg-clip-text text-transparent'>Nirvana-Ai</h3>
                </div>
                <div className="pages">
                    <ul className='flex font-semibold justify-center items-center gap-7 text-gray-300'>
                        <li className='hover:font-bold cursor-pointer'>Home</li>
                        <li className='hover:font-bold cursor-pointer'>About</li>
                        <li className='hover:font-bold cursor-pointer'>Contact-Us</li>
                    </ul>
                </div>
                <div className="icons flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                        <IoMdMoon className="text-xl" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                        <FaUser className="text-lg" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 text-gray-300 hover:text-purple-400">
                        <FaGithub className='text-lg' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar