import React from 'react';

import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Slider from '../components/slider/Slider.jsx';
import Searching from '../components/searching/Searching.jsx';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Searching/>
        <Footer/>

    </div>
  )
}

export default Home