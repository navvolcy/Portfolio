import React, { useState } from "react";
import{
    FaBars,
    Fatimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icon/hi';
import{ BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
     
    return (

        <div className="fix w-full h-[80px] flex justify-between items-center px-4 bg- [#0a192f] text- gray-300">
            <div>
                <h1 className="font-thin text-2xl italic font-serif">TB</h1>
            </div>
            {/*menu*/}
            <ul className="hidden md:flex gap-x-8">
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='Skill' smooth={true} duration={500}>
                        Skill
                    </Link>
                </li>
                <li>
                    <Link to='Hobbies' smooth={true} duration={500}>
                        Hobbies
                    </Link>
                </li>
                <li>
                    <Link to='Contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            <div onClick={handleClick} className= 'md:hidden z-10'>
                {!nav ? <FaBars/> : <Fatimes/>}
            </div>
            {/*Mobile menu */}
            <ul className={!nav ?
            'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}
            >
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}></Link>
                </li>

            </ul>
        </div>
    )
}
