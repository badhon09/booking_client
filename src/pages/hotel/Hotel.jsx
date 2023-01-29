import React from 'react'
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Searching from '../../components/searching/Searching.jsx';
import Roomlist from '../../components/roomlist/Roomlist.jsx';

const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <Searching/>
      <Roomlist/>
      <Footer/>  
    </div>
  )
}

export default Hotel