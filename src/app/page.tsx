'use client'
import React from 'react';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';
import Electronics1 from './Categories/Electronic1/page';
import AboutUs1 from './Categories/AboutUs1/page';
import ContactUs1 from './Categories/ContactUs1/page';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Electronics1 />
      <AboutUs1 />
      <ContactUs1 />
      <Footer />
    </div>
  );
}
