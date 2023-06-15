import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Searching(){
    let [formData,setFormData] = useState([]);
    const navigate = useNavigate();
    const handleChange = (e) =>{
        setFormData({
            ...formData,
           [e.target.name]:e.target.value,
          
       });
    }

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
        navigate(`/rooms?checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&persons=${formData.person}`)
    }
	return(
        <form onSubmit={handleSubmit}>
			<div id="search">
            <div className="container">
                <div className="form-row">
                    <div className="control-group col-md-3">
                        <label>Check-In</label>
                        <div className="form-group">
                            <div className="input-group date" id="date-3" data-target-input="nearest">
                            <input type="date" className="form-control " name="checkIn" value={formData.checkIn} onChange={handleChange}  placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                {/* <div className="input-group-append" data-target="#date-3" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="control-group col-md-3">
                        <label>Check-Out</label>
                        <div className="form-group">
                            <div className="input-group date" id="date-4" data-target-input="nearest">
                            <input type="date" className="form-control " name="checkOut" value={formData.checkOut} onChange={handleChange}  placeholder="E.g. MM/DD/YYYY" required="required" data-validation-required-message="Please enter date"/>
                                {/* <div className="input-group-append" data-target="#date-4" data-toggle="datetimepicker">
                                    <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="control-group col-md-3">
                        <div className="form-row">
                            <div className="control-group col-md-6">
                                <label>Persons</label>
                                <select className="custom-select" name='person' onChange={handleChange}>
                                    <option >0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div className="control-group col-md-6 kid">
                                <label>Kid</label>
                                <select className="custom-select">
                                    <option >0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="control-group col-md-3">
                        <button type='submit' className="btn btn-block">Search</button>
                    </div>
                </div>
            </div>
        </div>
        </form>

		)
}