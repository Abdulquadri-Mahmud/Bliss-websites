import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';

export default function PagesRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
            </Routes>
        </Router>
    </div>
  )
}
