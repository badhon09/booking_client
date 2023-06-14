import React,{useState,useRef} from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useParams, useHistory, Link } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';
import {domain} from '../../utils.js';

const RoomDetails = () => {

    const priceRef = useRef(null)
    
	let { id } = useParams();
	const {data,loading,error} = useFetch(`${domain}/rooms/getroom/`+id)


    const [formData, setFormData] = useState([]);
    const [dataNew,setDataNew] = useState([])
    const storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser);
    
console.log(data);
    const handleChange = (e) => {
        

        const start = new Date(formData.checkIn);
        const end = new Date(formData.checkOut);
       
       const diffTime = end - start;
       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

       let roomPrice = priceRef.current.value;
       let totalRoomPrice = roomPrice * diffDays;
       const datesArray = getDatesBetween(start, end);
        console.log(datesArray)

       setFormData({
             ...formData,
            [e.target.name]:e.target.value,
            ["roomNumber"]:id,
            ["totalPrice"]:totalRoomPrice,
            ["userId"] : user.data._id,
           
        });
    }

    function getDatesBetween(startDate, endDate) {
      const dates = [];
      let currentDate = startDate;

      while (currentDate <= endDate) {
        dates.push(currentDate.toLocaleDateString);
        currentDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
      }

      return dates;
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        console.log(formData)

       // try {
            await axios.post('http://127.0.0.1:3001/api/bookings/add', formData)
            .then((response) => {
              console.log(response);
              Swal.fire("Success","Your Booking has created","success");
              //window.location = "/login" 
            }, (error) => {
              console.log(error);
            });
        // } catch (error) {
        //   console.log(error);
        // }

       
      
       
       //console.log(formData)
    }

return(

	

	<>
	<Navbar/>

	 {loading ? (
            "Please Wait"

            ) : (

            <>
	<div className="row ">
		<div className="col-md-12">
			<div className="card">
				<div className="card-header">
					<h4>{data[0] ? data[0].title : ''}</h4>
					<img src={data[0] ? data[0].photos : ''}/>
                    <p>Room Number : {data[0] ? data[0].roomNumber : ''}</p>
                    <p>Price Per Day : {data[0] ? data[0].price : ''}</p>
				</div>
			</div>
		</div>
	</div>
	</>

	)}

	 <div id="booking">
            <div className="container">
                <div className="section-header">
                    <h2>Room Booking</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="booking-form">
                            <div id="success"></div>
                            <form onSubmit={handleSubmit} method='post'>
                                {/*<div className="form-row">
                                    <div className="control-group col-md-6">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" id="fname" placeholder="E.g. John" required="required" data-validation-required-message="Please enter first name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-md-6">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" id="lname" placeholder="E.g. Sina" required="required" data-validation-required-message="Please enter last name" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-md-6">
                                        <label>Mobile</label>
                                        <input type="text" className="form-control" id="mobile" placeholder="E.g. +1 234 567 8900" required="required" data-validation-required-message="Please enter your mobile number" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-md-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>*/}
                                <input ref={priceRef} name='price' value={data[0] ? data[0].price : ''}/>
                                <div className="form-row">
                                    <div className="control-group col-md-6">
                                        <label>Check-In</label>
                                        
                                        <input type="date" className="form-control " name="checkIn" value={formData.checkIn} onChange={handleChange}  placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-md-6">
                                        <label>Check-Out</label>
                                        <input type="date" className="form-control " name="checkOut" value={formData.checkOut} onChange={handleChange}  placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label>Special Request</label>
                                    <input type="text" className="form-control" id="request" name="desc" value={formData.desc} onChange={handleChange} placeholder="E.g. Special Request" required="required" data-validation-required-message="Please enter your special request" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="button"><button type="submit" id="bookingButton">Book Now</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


	<Footer/>

	</>


	)


}

export default RoomDetails;