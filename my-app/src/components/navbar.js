import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import Logo from '../Assets/e_cell_logo.png'
export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowHamburger(true);
    } else {
      setShowHamburger(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="z-[50] fixed top-0 w-full border-b backdrop-blur-sm bg-white/[0.1] border-neutral-200 dark:border-white/[0.1]">
        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={Logo} className="h-10 mt-1" alt="Flowbite Logo" />
              <span className="self-center mx-4 text-2xl font-extrabold whitespace-nowrap text-black">E-CELL</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login/Signup</button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className={`items-center justify-between ${isOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
              <ul className="flex flex-col pb-3 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                <li>
                  <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                </li>
                <li>
                  <Link to="/Events" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Events</Link>
                </li>
                <li>
                  <Link to="/Innovations" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-balck dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Innovations</Link>
                </li>
                <li>
                  <Link to="/Blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>
                </li>
                <li>
                  <Link to="/Team" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-black dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
