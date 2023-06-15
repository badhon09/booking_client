import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Searching from '../../components/searching/Searching.jsx';
import Roomlist from '../../components/roomlist/Roomlist.jsx';
import useFetch from '../../hooks/useFetch.js';
import {domain} from '../../utils.js';

const Hotel = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const persons = queryParams.get('persons');
  const checkIn = queryParams.get('checkIn');

  console.log('Value of a:', persons);
  console.log('Value of b:', checkIn);

  const {data,loading,error} = useFetch(`${domain}/rooms/search-room/`+persons)

  // useEffect(() => {
   
  // }, []);
  return (
    <div>
      <Navbar/>
      <Searching/>
      <Roomlist data={data} loading={loading}/>
      <Footer/>  
    </div>
  )
}

export default Hotel