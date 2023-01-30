import React,{useState} from 'react';
import Swal from 'sweetalert2'
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function Login(){
    const [formData , setFormData] = useState([]);
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
            setErrors(newErrors);
            return !Object.keys(newErrors).length;

        }

    const handleSubmit = async (e) => {
        e.preventDefault();
         if (validateForm()) {
              console.log("Form is valid");
            } else {
              console.log("Form is invalid");
            }
    }
	return (
		<div>
		 <Navbar/>

		 <div id="login">
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
                                        <label>Your Email</label>
                                        <input type="text" name="email" value={formData.email} onChange={handleChange} className="form-control"  />
                                        {errors.email && <p>{errors.email}</p>}
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Your Password</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control"  />
                                        {errors.password && <p>{errors.password}</p>}
                                    </div>
                                </div>
                                <div className="button"><button type="submit">Login</button></div>
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