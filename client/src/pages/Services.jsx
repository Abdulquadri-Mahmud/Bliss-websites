import React from 'react';

import Header2 from '../components/Header2';

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import services1 from '../assets/img/service1.jpg';
import services2 from '../assets/img/service2.jpg';
import services3 from '../assets/img/service3.jpg';

export default function Services() {
  return (
    <>
        <Header2/>
        <section className='2xl:px-[10rem] md:px-[5rem] md:py-[5rem] px-3 py-10'>
            <h1 className="pb-7 font-semibold text-4xl text-center">Our Message Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="">
                    <div className="img">
                        <img src={services1} alt="" className='rounded'/>
                    </div>
                    <p className='font-semibold pt-2'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <div className="mt-5">
                        <button className='p-3 bg-slate-800 w-[200px] hover:bg-[#f6b606] duration-200 text-slate-50 uppercase font-semibold rounded'>Read More</button>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <img src={services2} alt="" className='rounded'/>
                    </div>
                    <p className='font-semibold pt-2'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <div className="mt-5">
                        <button className='p-3 bg-slate-800 w-[200px] hover:bg-[#f6b606] duration-200 text-slate-50 uppercase font-semibold rounded'>Read More</button>
                    </div>
                </div>
                <div className="">
                    <div className="img">
                        <img src={services3} alt="" className='rounded'/>
                    </div>
                    <p className='font-semibold pt-2'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <div className="mt-5">
                        <button className='p-3 bg-slate-800 w-[200px] hover:bg-[#f6b606] duration-200 text-slate-50 uppercase font-semibold rounded'>Read More</button>
                    </div>
                </div>
            </div>
        </section>
        <footer className='mt-20 2xl:px-[6rem] md:px-[4rem] md:py-[4rem] px-8 py-10 bg-slate-800'>
            <div className="text-slate-100 grid md:grid-cols-4 grid-cols-1 gap-4">
                <div className="">
                    <div className="header relative">
                        <h2 className='text-3xl'>About Us</h2>
                    </div>
                    <p className='pt-6 font-semibold'>Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourc</p>
                    <div className="pt-3">
                        <button className='btn p-2 w-[200px] hover:bg-slate-100 duration-200 bg-[#f6b606] rounded font-semibold text-xl'><Link to='/about'>Read More...</Link></button>
                    </div>
                </div>
                <div className="">
                    <div className="header relative">
                        <h2 className='text-3xl'>Blog</h2>
                    </div>
                    <p className='pt-6 font-semibold'>Which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anythin</p>
                    <div className="pt-9">
                        <button className='btn p-2 w-[200px] hover:bg-slate-100 duration-200 bg-[#f6b606] rounded font-semibold text-xl'><Link to='/blog'>Read More...</Link></button>
                    </div>
                </div>
                <div className="">
                    <div className="header relative">
                        <h2 className='text-3xl'>Usefull Links</h2>
                    </div>
                    <nav className="flex flex-col text-gray-50 pt-6">
                        <Link className='font-semibold text-1xl duration-200 hover:text-gray-200 py-1' to='/'>Home</Link>
                        <Link className='font-semibold text-1xl duration-200 hover:text-gray-200 py-1' to='/about'>About</Link>
                        <Link className='font-semibold text-1xl duration-200 hover:text-gray-200 py-1' to='blog'>Blog</Link>
                        <Link className='font-semibold text-1xl duration-200 hover:text-gray-200 py-1' to='/services'>Services</Link>
                        <Link className='font-semibold text-1xl duration-200 hover:text-gray-200 py-1' to='contact'>Contact Us</Link>
                    </nav>
                </div>
                <div className="font-semibold">
                    <div className="header relative">
                        <h2 className='text-3xl'>News Letter</h2>
                    </div>
                    <form className='pt-6'>
                        <div className="">
                            <input type="email" placeholder='Email' className='w-full p-2 rounded font-semibold border-2 border-[#f6b606]'/>
                        </div>
                        <div className="flex justify-center pt-3">
                            <button className='subscribe uppercase w-[170px] hover:bg-slate-100 hover:text-slate-800 duration-200 bg-[#f6b606] p-2 rounded font-semibold text-xl'>subscribe</button>
                        </div>
                    </form>
                    <div className="flex flex-col">
                        <Link to='tel:+2347047594667'>+234 7047594667</Link>
                        <Link to='mailto:+2347047594667'>abdulquadrimahmud06@gmail.com</Link>
                    </div>
                </div>
            </div>
            <div className="mt-14">
                <h2 className='text-center text-slate-100 font-semibold text-3xl'>Follow Us</h2>
                <div className="socialLink flex justify-center pt-5 gap-x-6">
                    <Link to='#' className='p-2 hover:translate-y-3 duration-200 -translate-y-3 bg-[#f6b606] rounded-full'><FaFacebookF className="text-2xl text-slate-100"/></Link>
                    <Link to='#' className='p-2 hover:-translate-y-3 duration-200 translate-y-3 bg-[#f6b606] rounded-full'><FaInstagram className="text-2xl text-slate-100"/></Link>
                    <Link to='#' className='p-2 hover:-translate-y-3 duration-200 translate-y-3 bg-[#f6b606] rounded-full'><FaTwitter className="text-2xl text-slate-100"/></Link>
                    <Link to='#' className='p-2 hover:translate-y-3 duration-200 -translate-y-3 bg-[#f6b606] rounded-full'><IoLogoYoutube className="text-2xl text-slate-100"/></Link>
                </div>
            </div>
            <div className=" mt-10">
                <p className='font-semibold text-[16px] text-slate-100 text-center'>&copy;Copyright 2023 All Rights Reserved. Designed By Adeyemi-Codes</p>
            </div>
        </footer>
    </>
  )
}
