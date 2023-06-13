import React,{useState} from 'react';
import { Navigate  } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from 'axios';

// import env from  '../../env'
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function Registration(){

     const [formData , setFormData] = useState({
             type:'customer',
     });
    const handleChange = (e) => {
        setFormData({
             ...formData,
            [e.target.name]:e.target.value
        });
       
    }
    const [errors, setErrors] = useState({});

    const validateForm =() => {
        let newErrors = {};
           if (!formData.email) {
              newErrors.email = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
              newErrors.email = "Email is not valid";
            }
            if (!formData.password) {
              newErrors.password = "Password is required";
            }

             if (formData.password != formData.cpassword) {
              Swal.fire("Password Unmatched","password does not matched","warning")
            }
            setErrors(newErrors);
            return !Object.keys(newErrors).length;

        }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //alert(process.env.REG_URL)
         if (validateForm()) {
            console.log(formData)
            try {
                axios.post('http://127.0.0.1:3001/api/users/register', formData)
                .then((response) => {
                  console.log(response);
                  Swal.fire("Success","Your Account Created Successfully","success");
                  window.location = "/login" 
                }, (error) => {
                  console.log(error);
                });
            } catch (error) {
              console.error(error);
            }

                         
            } else {
              console.log("Form is invalid");
            }
    }


	return (
		<div>
		 <Navbar/>
		 <div id="register">
            <div className="container">
                <div className="section-header">
                    <h2>Registration / Login</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="login-form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" required="required" />
                                         {/*<input type="text" name="type" value="customer" onChange={handleChange} className="form-control" required="required" />*/}
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Email</label>
                                        <input type="email" name="email"  value={formData.email} onChange={handleChange} className="form-control" required="required" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Password</label>
                                        <input type="password" name="password"value={formData.password} onChange={handleChange} className="form-control" required="required" />
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Repeat Your Password</label>
                                        <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} className="form-control" required="required" />
                                    </div>
                                </div>
                                <div className="button"><button type="submit">Registration</button></div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
		</div>
	)
}