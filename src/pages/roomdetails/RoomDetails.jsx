import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useFetch from '../../hooks/useFetch.js';
import { useParams, useHistory, Link } from "react-router-dom";

const RoomDetails = () => {
	let { id } = useParams();
	const {data,loading,error} = useFetch("http://127.0.0.1:5000/api/rooms/getroom/"+id)
	console.log(data)

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
                            <form name="sentMessage" id="bookingForm" novalidate="novalidate">
                                <div className="form-row">
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
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-md-6">
                                        <label>Check-In</label>
                                        <input type="text" className="form-control datetimepicker-input" id="date-1" data-toggle="datetimepicker" data-target="#date-1" placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-md-6">
                                        <label>Check-Out</label>
                                        <input type="text" className="form-control datetimepicker-input" id="date-2" data-toggle="datetimepicker" data-target="#date-2" placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label>Special Request</label>
                                    <input type="text" className="form-control" id="request" placeholder="E.g. Special Request" required="required" data-validation-required-message="Please enter your special request" />
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