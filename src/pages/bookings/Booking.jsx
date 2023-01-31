import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useFetch from '../../hooks/useFetch.js';

const Booking = () => {
   let userId = "63d5027437e6a5c0c4569a58"
	  const {data, loading ,error} = useFetch("http://127.0.0.1:5000/api/bookings/all/"+userId);
	  console.log("aaaaaaaaa"+data);


	return (
		
			<div>
			<Navbar/>

			<>
				<h1 className="">My Booking List</h1>
				<div className="container table-responsive py-5"> 
				<table className="table table-bordered table-hover">
				  <thead className="thead-dark">
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Room Number</th>
				      <th scope="col">Check-In</th>
				      <th scope="col">Check-Out</th>
				      <th scope="col">Total</th>
				    </tr>
				  </thead>
				  <tbody>
					{data.map(item=>(
						<tr>
					      <th scope="row">1</th>
					      <td>{item.roomNumber}</td>
					      <td>{item.checkIn}</td>
					      <td>{item.checkIn}</td>
					       <td>{item.checkOut}</td>
					    </tr>

					))}
					    
				  </tbody>
				</table>
				</div>

			</>

			<Footer/>
			</div>

		)

}


export default Booking;