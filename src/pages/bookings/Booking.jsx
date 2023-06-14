import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useFetch from '../../hooks/useFetch.js';

const Booking = () => {
	const storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser);
   let userId = user.data._id
	  const {data, loading ,error} = useFetch("http://127.0.0.1:3001/api/bookings/all/"+userId);
	  console.log("aaaaaaaaa"+data);


	return (
		
			<div>
			<Navbar/>

			<>
			<center>
			<h1 className="mt-4 justify-item-center">My Booking List</h1>
			</center>
				
				<div className="container table-responsive py-5"> 
				<table className="table table-bordered table-hover">
				  <thead className="thead-dark">
				    <tr>
				      <th scope="col">#</th>
				      <th scope="col">Room Number</th>
				      <th scope="col">Check-In</th>
				      <th scope="col">Check-Out</th>
				      <th scope="col">Total</th>
				      <th scope="col">Payment Status</th>
				    </tr>
				  </thead>
				  <tbody>
					{data.map(item=>(
						<tr>
					      <th scope="row">1</th>
					      <td>{item.roomNumber}</td>
					      <td>{item.checkIn}</td>
					      <td>{item.checkIn}</td>
					       <td>{item.totalPrice}</td>
					        <td>
					        	{item.isPaid==true ? (
					        				"Paid"
					        			
					        		) : (
					        			<a className="btn btn-warning">Pay</a>
					        		)
					        	
					        	}
					        </td>
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