"use client"
import React from "react";
import Navbar from '../app/navbar/Navbar';
import Header from '../app/Header/Header';
import Skills from '../app/Skills/Skills'
import Portfolio from '../app/Portfolio/Portfolio'
import About from '../app/About/About'
import Contact from '../app/contact/Contact'
import Footer from '../app/Footer/Footer'
import '../app/globals.css';

export default function App() {
  return (
    <div className="bg-with-gif">
      <Navbar />
      <Header />
 <About/>
      <Skills/>
 <Portfolio/>
 <Contact/>
 <Footer/>



    </div>
  );
}
