import React from 'react';
import Header2 from '../components/Header2';
import Google from '../components/Google';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <>
        <Header2/>
        <div className="h-[80vh] flex justify-center items-center p-3">
            <form className='md:w-[50%] w-[100%] bg-slate-800 p-4 rounded flex flex-col gap-6'>
                <div className="">
                    <input className='w-full rounded bg-slate-200 p-3' type="text" placeholder='Name' required/>
                </div>
                <div className="">
                    <input className='w-full rounded bg-slate-200 p-3' type="email" placeholder='Email' required/>
                </div>
                <div className="">
                    <input className='w-full rounded bg-slate-200 p-3' type="tell" placeholder='Phone' required/>
                </div>
                <div className="">
                    <input className='w-full rounded bg-slate-200 p-3' type="password" placeholder='Password' required/>
                </div>
                <div className="">
                    <input className='w-full rounded bg-slate-200 p-3' type="password" placeholder='Confirm Password' required/>
                </div>
                <div className="flex justify-center">
                    <button className='p-3 w-full bg-[#f6b606] rounded uppercase font-semibold text-slate-100'>Sign In</button>
                </div>
                <div className="flex justify-center w-full">
                    <Google/>
                </div>
                <div className="">
                    <p className='text-slate-100 font-semibold text-[16px]'>Alredy have an account? <span className='text-[#f6b606]'><Link to='/signin'>Sign In</Link></span></p>
                </div>
            </form>
        </div>
    </>
  )
}
