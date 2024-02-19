import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserLock } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <>
        <div className="">
            <div className="p-5 top"></div>
            <div className="flex justify-between items-center px-6 py-4">
                <div className="logo">
                    <h1 className='md:text-5xl text-4xl font-semibold text-[#ffbe0a]'>Bliss</h1>
                </div>
                <div className="hidden md:block">
                    <nav className="flex gap-x-4">
                        <Link className='font-semibold text-1xl hover:underline duration-200 hover:text-[#ffbe0a]' to='/'>Home</Link>
                        <Link className='font-semibold text-1xl hover:underline duration-200 hover:text-[#ffbe0a]' to='/about'>About</Link>
                        <Link className='font-semibold text-1xl hover:underline duration-200 hover:text-[#ffbe0a]' to='/services'>Services</Link>
                        <Link className='font-semibold text-1xl hover:underline duration-200 hover:text-[#ffbe0a]' to='/blog'>Blog</Link>
                        <Link className='font-semibold text-1xl hover:underline duration-200 hover:text-[#ffbe0a]' to='/contact'>Contact Us</Link>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <Link to='/signin'><FaUserLock className='text-2xl'/></Link>
                </div>
                <div className="block md:hidden">
                    <div className="flex gap-2 pr-2">
                        <div className='block md:hidden'>
                            <Link to='/signin'><FaUserLock className='text-2xl'/></Link>
                        </div>
                        <div className="sidebar_cont block md:hidden">
                            <div className="side_menu">
                                <RiMenu3Fill className='text-3xl cursor-pointer'/>
                            </div>
                            <div className="sidemenu fixed top-0 right-0 z-10 w-0 duration-300 overflow-hidden h-full bg-[#ffbe0a] pt-20">
                                <nav className="flex flex-col gap-x-4 text-center text-gray-50 p-5">
                                    <Link className='font-semibold text-xl duration-200 hover:text-gray-200 py-3' to='/'>Home</Link>
                                    <Link className='font-semibold text-xl duration-200 hover:text-gray-200 py-3' to='/about'>About</Link>
                                    <Link className='font-semibold text-xl duration-200 hover:text-gray-200 py-3' to='/blog'>Blog</Link>
                                    <Link className='font-semibold text-xl duration-200 hover:text-gray-200 py-3' to='/services'>Services</Link>
                                    <Link className='font-semibold text-xl duration-200 hover:text-gray-200 py-3' to='/contact'>Contact Us</Link>
                                </nav>
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        </div>
    </>
  )
}
