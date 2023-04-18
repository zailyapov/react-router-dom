import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import NavBar from './conponents/NavBar';
import Users from './pages/Users';
import Main from './pages/Main';

export default function App(){
  return(
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>  
    </BrowserRouter> 
  )
}