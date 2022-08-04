import React from 'react';
import Navbar from './components/Navbar';
import { Home } from '@mui/icons-material';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { Layout } from './pages/Layout';

import { AboutUs } from './pages/AboutUs';
import { Homepage } from './pages/Homepage';
import {Kalender} from './pages/Kalender'
import {Signin} from './pages/Signin'
import {Signup} from './pages/Signup'
import { Footer } from './components/Footer';
import Read from './components/CRUD/Read'


// browserRouter is adding capabilties for react to go to different routes like url or something else.
// in Route main path is the slash the function element u want to pass render the 
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}> 
    <Route index element={<Homepage/>}></Route>
    <Route path='/kalender' element={<Kalender/>} />
    {/* <Route path='/signin' element={<Signin/>} /> */}
    <Route path='/signup' element={<Signup/>} />
    <Route path='/changeDate' element={<Read/>} />
    <Route path='*' element={<Homepage/>}></Route>
    </Route>
  </Routes>
  </BrowserRouter>
  
  );
}

export default App;
