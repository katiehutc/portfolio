import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNav, setShowNav] = useState(true); // whether navbar is visible
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed w-full h-20 flex justify-between items-center px-4 bg-[#182D09] text-[#FDFBD4] font-thick text-thick transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <div>
        <h1 className='font-thick text-2xl italic font-serif'> </h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer">
            Experience
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
            Projects
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer">
            Experience
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
