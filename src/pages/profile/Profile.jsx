import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch';
import { domain } from '../../utils';
import axios from 'axios';
import Swal from 'sweetalert2';
import { appContext } from '../../context/AppContext';

export const Profile = () => {

    //const storedUser = localStorage.getItem('user');
    let user = useContext(appContext);
    let [formData,setFormData] = useState([]);
    const {data,loading,error} = useFetch(`${domain}/users/profile/`+user.data._id);
    
    useEffect(()=>{
        setFormData(data[0]);
    },[data])
   
   
    const handleChange = async(e) => {
        setFormData({
            ...formData,
           [e.target.name]:e.target.value
       });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {

            await axios.post(`${domain}/users/update-profile/`+user.data._id, formData)
            .then((response) => {
              console.log(response);
              Swal.fire("Success","Your Profile Updated","success");
              //window.location = "/login" 
            }, (error) => {
              console.log(error);
            });
            
        } catch (error) {
            
        }
        console.log("Form values:", formData);
    }
  return (
    <div>
    <Navbar/>
    {loading ? (
            "Please Wait"

            ) : (

            <>
             <div className="container">
                <div className="mt-4 section-header">
                    <h2>My Profile</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="boking-form">
                           
                            <form onSubmit={handleSubmit} method='post'>
                                <div className="form-row">
                                    <div className="control-group col-md-6">
                                        <label> Name</label>
                                        <input type="text" className="form-control" name="name" value={formData ? formData.name : ''} onChange={handleChange}  />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-md-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={formData ? formData.email : ''} onChange={handleChange}/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <center>
                                <div className="button mb-5"><button type="submit" className='btn btn-primary' id="bookingButton">Update</button></div>

                                </center>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
            </>
            )}
    <Footer/>  
    </div>
  )
}
