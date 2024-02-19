import React from 'react'
import Header from '../components/Header';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import play from '../assets/img/play_icon.png';
import services1 from '../assets/img/service1.jpg';
import services2 from '../assets/img/service2.jpg';
import services3 from '../assets/img/service3.jpg';

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from 'react-icons/io5';

import blog1 from '../assets/img/blog1.jpg';
import blog2 from '../assets/img/blog2.jpg';
import blog3 from '../assets/img/blog3.jpg';

import about from '../assets/img/about_img.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Testimonial from '../components/Testimonial';
import { Link } from 'react-router-dom';

export default function Homepage() {

    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false
    };

  return (
    <>
        <div className="homebackground">
            <Header/>
            <div className="md:my-16 my-0  2xl:h-[60vh] h-[100%]">
                <Slider {...settings} className=''>
                    <div className="">
                        <div className="md:p-5 px-3 py-5 flex gap-4 justify-center items-center flex-wrap md:mt-7 mt-4">
                            <div className="md:w-[40%] w-full ">
                                <h1 className='md:text-6xl text-4xl font-semibold text-slate-800'>Spa <br /> Center</h1>
                                <p className='pt-6 font-semibold text-slate-800 text-[18px]'>commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <div className="pt-10 flex flex-col md:flex-row mt-4 gap-x-4">
                                    <button className='bg-[#f6b606] p-3 md:w-[170px] w-[150px] text-gray-50 uppercase rounded-full text-[16px] font-semibold'>Contact Us</button>
                                    <button className='bg-slate-800 p-3 md:w-[170px] mt-4 md:mt-0 w-[150px] text-gray-50 uppercase rounded-full text-[16px] font-semibold'>Read More</button>
                                </div>
                            </div>
                            <div className="flex md:w-[55%] md:flex-row md:pt-0 pt-10 w-full justify-between gap-x-5">
                                <div className="relative flex justify-center items-center">
                                    <img src={img1} alt="img1" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play" />
                                    </div>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={img2} alt="img2" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-5 flex gap-4 justify-center items-center flex-wrap md:mt-7 mt-4">
                            <div className="md:w-[40%] w-full ">
                                <h1 className='md:text-6xl text-4xl font-semibold text-slate-800'>Spa <br /> Center</h1>
                                <p className='pt-6 font-semibold text-slate-800 text-[18px]'>commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <div className="pt-10 flex flex-col md:flex-row mt-4 gap-x-4">
                                    <button className='text-[16px] bg-[#f6b606] p-3 md:w-[170px] w-[150px] text-gray-50 uppercase rounded-full font-semibold'>Contact Us</button>
                                    <button className='text-[16px] bg-slate-800 p-3 md:w-[170px] mt-4 md:mt-0 w-[150px] text-gray-50 uppercase rounded-full font-semibold'>Read More</button>
                                </div>
                            </div>
                            <div className="flex md:w-[55%] md:flex-row md:pt-0 pt-10 w-full justify-between gap-x-5">
                                <div className="relative flex justify-center items-center">
                                    <img src={img1} alt="img1" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play" />
                                    </div>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={img2} alt="img2" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="p-5 flex gap-4 justify-center items-center flex-wrap md:mt-7 mt-4">
                            <div className="md:w-[40%] w-full ">
                                <h1 className='md:text-6xl text-4xl font-semibold text-slate-800'>Spa <br /> Center</h1>
                                <p className='pt-6 font-semibold text-slate-800 text-[18px]'>commodo consequat. <br /> Duis aute irure dolor in reprehenderit in voluptate velit <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
                                <div className="pt-10 flex flex-col md:flex-row mt-4 gap-x-4">
                                    <button className='bg-[#f6b606] p-3 md:w-[170px] w-[150px] text-gray-50 uppercase rounded-full text-[16px] font-semibold'>Contact Us</button>
                                    <button className='bg-slate-800 p-3 md:w-[170px] mt-4 md:mt-0 w-[150px] text-gray-50 uppercase rounded-full text-[16px] font-semibold'>Read More</button>
                                </div>
                            </div>
                            <div className="flex md:w-[55%] md:flex-row md:pt-0 pt-10 w-full justify-between gap-x-5">
                                <div className="relative flex justify-center items-center">
                                    <img src={img1} alt="img1" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play" />
                                    </div>
                                </div>
                                <div className="relative flex justify-center items-center">
                                    <img src={img2} alt="img2" className='object-fit'/>
                                    <div className="absolute play rounded-full p-2">
                                        <img src={play} alt="play"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            
        </div>
        <section className='2xl:px-[10rem] md:px-[5rem] md:py-[5rem] px-3 py-10 bg-[#f6b606] sect2'>
            <div className="pt-3">
                <h1 className='font-semibold text-4xl text-center text-gray-100'>MAKE AN APPOINTMENT</h1>
                <p className='pt-2 text-center font-semibold text-gray-100'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto harum est neque molestiae nihil.</p>
            </div>
            <form className='mt-6'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="">
                        <input type="text" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Name' required/>
                    </div>
                    <div className="">
                        <input type="email" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Email' required/>
                    </div>
                    <div className="">
                        <input type="text" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Phone' required/>
                    </div>
                    <div className="">
                        <input type="text" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Select Message'/>
                    </div>
                    <div className="">
                        <input type="time" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Time'/>
                    </div>
                    <div className="">
                        <input type="date" className='w-full rounded p-4 focus:outline-none font-semibold' placeholder='Date'/>
                    </div>
                </div>
                <div className="mt-5">
                    <textarea name="" className='w-full rounded p-6 focus:outline-none font-semibold' placeholder='Type Message...'></textarea>
                </div>
                <div className="flex justify-center mt-5">
                    <button className='w-[250px] bg-slate-50 font-semibold uppercase rounded p-3 hover:bg-[#f6b606] duration-200'>Send Now</button>
                </div>
            </form>
        </section>
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
        <section className='md:px-3 py-[3rem] bg-slate-800'>
            <h1 className="font-semibold text-center text-4xl text-slate-50">Our Priceing</h1>
            <p className='font-semibold pt-2 text-center text-slate-50'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <div className="mt-10 flex justify-center items-center">
                <div className="md:w-[80%] w-full flex md:gap-3 gap-14 justify-around flex-wrap p-2 rounded items-center mt-0">
                    <div className="bg-slate-100 flex justify-center md:w-[47%] w-[90%] h-[400px] rounded relative">
                        <div className="absolute flex flex-col gap-7 -top-7 w-[90%] text-center rounded p-3 bg-[#f6b606]">
                            <div className="">
                                <h1 className='text-3xl font-semibold'>Regular Price</h1>
                            </div>
                            <div className="text-slate-50">
                                <p className='text-7xl'><sub>$</sub>50</p>
                            </div>
                            <div className="">
                                <p className='text-1xl text-slate-50 font-semibold'>sed do eiusmod <br /> tempor incididunt ut <br /> labore et dolore <br />magna aliqua. Utenim <br />ad minim aliquip             </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ">
                            <button className='absolute -bottom-7 hover:bg-[#f6b606] duration-200 rounded shadow text-slate-100 uppercase font-semibold text-lg bg-slate-800 p-3 w-[200px] border-b-2 border-b-slate-100'>Read More</button>
                        </div>
                    </div>
                    <div className="bg-slate-100 flex justify-center md:w-[47%] w-[90%] h-[400px] rounded mt-5 md:mt-0 relative">
                        <div className="absolute flex flex-col gap-7 -top-7 w-[90%] text-center rounded p-3 bg-[#f6b606]">
                            <div className="">
                                <h1 className='text-3xl font-semibold'>Special Price</h1>
                            </div>
                            <div className="text-slate-50">
                                <p className='text-7xl'><sub>$</sub>100</p>
                            </div>
                            <div className="">
                                <p className='text-1xl text-slate-50 font-semibold'>sed do eiusmod <br /> tempor incididunt ut <br /> labore et dolore <br />magna aliqua. Utenim <br />ad minim aliquip             </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center ">
                            <button className='absolute -bottom-7 hover:bg-[#f6b606] duration-200 rounded shadow text-slate-100 uppercase font-semibold text-lg bg-slate-800 p-3 w-[200px] border-b-2 border-b-slate-100'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='md:px-5 px-1 py-[3rem]'>
            <h1 className="font-semibold text-center text-4xl text-slate-800">Latest Blog</h1>
            <p className='font-semibold pt-2 text-center text-slate-800'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
            <div className="mt-10 flex justify-center items-center">
                <div className="md:w-[80%] w-full flex md:gap-3 gap-4 justify-around flex-wrap p-2 rounded items-center mt-0">
                    <div className="p-3 bg-slate-200 rounded w-[350px] relative mt-5">
                        <div className="relative flex justify-center">
                            <img src={blog1} alt="blog" className='rounded w-full'/>
                            <div className="absolute bottom-0 w-[130px] text-center p-2 bg-slate-800 text-slate-100 font-semibold date">
                                <p>16 March</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className='text-center py-3 text-2xl font-semibold text-slate-800'>Quis Nostrud</h2>
                            <p className='text-center font-semibold'>sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                        </div>
                        <div className="flex justify-center items-center mt-7">
                            <button className='hover:bg-slate-800 duration-200 absolute -bottom-5 rounded shadow text-slate-100 uppercase font-semibold text-[16px] bg-[#f6b606] p-2 w-[160px]'>Read More</button>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-200 rounded w-[350px] relative mt-5">
                        <div className="relative flex justify-center">
                            <img src={blog2} alt="blog" className='rounded w-full'/>
                            <div className="absolute bottom-0 w-[130px] text-center p-2 bg-slate-800 text-slate-100 font-semibold date">
                                <p>17 March</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className='text-center py-3 text-2xl font-semibold text-slate-800'>Veniam, Quis</h2>
                            <p className='text-center font-semibold'>sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                        </div>
                        <div className="flex justify-center items-center mt-7">
                            <button className='hover:bg-slate-800 duration-200 absolute -bottom-5 rounded shadow text-slate-100 uppercase font-semibold text-[16px] bg-[#f6b606] p-2 w-[160px]'>Read More</button>
                        </div>
                    </div>
                    <div className="p-3 bg-slate-200 rounded w-[350px] relative mt-5">
                        <div className="relative flex justify-center">
                            <img src={blog3} alt="blog" className='rounded w-full'/>
                            <div className="absolute bottom-0 w-[130px] text-center p-2 bg-slate-800 text-slate-100 font-semibold date">
                                <p>18 March</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className='text-center py-3 text-2xl font-semibold text-slate-800'>Tempor incididunt</h2>
                            <p className='text-center font-semibold'>sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco <br /> laboris nisi ut aliquip</p>
                        </div>
                        <div className="flex justify-center items-center mt-7">
                            <button className='hover:bg-slate-800 duration-200 absolute -bottom-5 rounded shadow text-slate-100 uppercase font-semibold text-[16px] bg-[#f6b606] p-2 w-[160px]'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='2xl:px-[10rem] md:px-[5rem] md:py-[5rem] px-3 py-10 flex justify-center items-center flex-wrap gap-7 bg-slate-200'>
            <div className="md:w-[47%] w-full">
                <div className="md:h-[350px] h-full md:w-[80%] w-full bg-slate-800 md:p-0 p-2 relative rounded">
                    <img src={about} alt="" className='md:absolute md:top-10 md:left-10 rounded w-full shadow-xl'/>
                </div>
            </div>
            <div className="md:w-[47%] w-full md:mt-0">
                <h1 className='text-4xl font-semibold pb-4'>About Our Center</h1>
                <p className='font-semibold text-lg'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br /> nisi ut aliquipsed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam, <br /> quis nostrud  exercitation ullamco laboris <br /> nisi ut aliquip</p>
                <div className="flex justify-start items-center mt-7">
                    <button className='rounded shadow hover:bg-[#f6b606] duration-200 text-slate-100 uppercase font-semibold text-lg bg-slate-800 p-3 w-[200px]'>Read More</button>
                </div>
            </div>
        </section>
        <section className='2xl:px-[10rem] md:px-[2rem] md:py-[5rem] px-3 py-10 bg-slate-800 mt-8'>
            <Testimonial/>
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
