import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonial1 from '../assets/img/test1.png';
import testimonial2 from '../assets/img/test2.png';
import testimonial3 from '../assets/img/test3.png';

export default function Testimonial() {
    const settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        cssEase: "linear",
        responsive : [
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
        ]
    };
  return (
    <div>
        <h1 className='text-center font-semibold text-3xl text-slate-100'>What Is Says Customers </h1>
        <div className="text-slate-800 pt-7">
            <Slider {...settings}>
                <div className="bg-slate-200 p-3 rounded rounded-t-2xl border-t-8 border-l-0 border-l-slate-800 border-r-2 border-r-slate-800 border-[#f6b606]">
                    <div className="flex justify-center items-center gap-4 flex-col">
                        <div className="flex justify-center items-center flex-col">
                            <div className="img w-[170px] h-[170px] flex justify-center items-center p-1 rounded-full  bg-slate-800">
                                <img src={testimonial1} alt="" className='rounded-full w-full '/>
                            </div>
                            <div className="">
                                <h3 className='font-semibold text-center text-2xl'>ENGLISH.MANY</h3>
                                <p className='font-semibold text-center'>normal distribution</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-center font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 p-3 rounded rounded-t-2xl border-t-8 border-l-0 border-l-slate-800 border-r-2 border-r-slate-800 border-[#f6b606]">
                    <div className="flex justify-center items-center gap-4 flex-col">
                        <div className="flex justify-center items-center flex-col">
                            <div className="img w-[170px] h-[170px] flex justify-center items-center p-1 rounded-full bg-slate-800">
                                <img src={testimonial2} alt="" className='rounded-full w-full '/>
                            </div>
                            <div className="">
                                <h3 className='font-semibold text-center text-2xl'>ENGLISH.MANY</h3>
                                <p className='font-semibold text-center'>normal distribution</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-center font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-200 p-3 rounded rounded-t-2xl border-t-8 border-l-0 border-l-slate-800 border-r-2 border-r-slate-800 border-[#f6b606] ">
                    <div className="flex justify-center items-center gap-4 flex-col">
                        <div className="flex justify-center items-center flex-col">
                            <div className="img w-[170px] h-[170px] flex justify-center items-center p-1 rounded-full bg-slate-800">
                                <img src={testimonial3} alt="" className='rounded-full w-full '/>
                            </div>
                            <div className="">
                                <h3 className='font-semibold text-center text-2xl'>ENGLISH.MANY</h3>
                                <p className='font-semibold text-center'>normal distribution</p>
                            </div>
                        </div>
                        <div className="">
                            <p className='text-center font-semibold'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
  )
}
