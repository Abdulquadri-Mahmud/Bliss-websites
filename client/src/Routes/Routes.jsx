import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function PagesRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Router>
    </div>
  )
}
