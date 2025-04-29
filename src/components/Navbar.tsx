import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className="p-4 relative"
            style={{
                background: 'radial-gradient(circle at 32% 26%, #F5C645 24.322509765625%, #E5B010 54.385964912280706%, #FBECC4 100%)',
            }}
        >
            <div className="flex items-center max-w-6xl mx-auto">
                {/* Desktop Menu - Centered */}
                <ul className="hidden md:flex justify-center gap-6 flex-1">
                    <li>
                        <Link to="/" className="text-gray-900 font-bold text-lg hover:text-white transition py-2 px-4">
                            หน้าแรก
                        </Link>
                    </li>
                    <li>
                        <Link to="/schedule" className="text-gray-900 font-bold text-lg hover:text-white transition py-2 px-4">
                            โปรแกรมการแข่งขัน
                        </Link>
                    </li>
                    <li>
                        <Link to="/live" className="text-gray-900 font-bold text-lg hover:text-white transition py-2 px-4">
                            ดูถ่ายทอดสด
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-gray-900 font-bold text-lg hover:text-white transition py-2 px-4">
                            สมัครสมาชิก
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Menu for Mobile - Right Side */}
                <button
                    className="md:hidden text-white focus:outline-none z-50 ml-auto"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-gray-800 w-full absolute left-0 top-16 z-40`}
            >
                <ul className="flex flex-col items-center gap-4 py-4">
                    <li>
                        <Link
                            to="/"
                            className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition"
                            onClick={toggleMenu}
                        >
                            หน้าแรก
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/schedule"
                            className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition"
                            onClick={toggleMenu}
                        >
                            โปรแกรมการแข่งขัน
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/live"
                            className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition"
                            onClick={toggleMenu}
                        >
                            ดูถ่ายทอดสด
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition"
                            onClick={toggleMenu}
                        >
                            สมัครสมาชิก
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;