import React, {useState} from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';


export default function Contact(){
   
        const [formData,setFormData] = useState([])
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

      const handleSubmit = async(e) => {
        e.preventDefault();
        // submit formData to the server
        console.log(formData)
        try {
          const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          const result = await response.json();
          console.log(result);
        } catch (err) {
          console.error(err);
        }
      };
	return (
		<div>
		 <Navbar/>

		 <div id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in mi libero. Quisque convallis, enim at venenatis tincidunt.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row contact-info">
                            <div className="col-md-4">
                                <div className="info-item">
                                    <p><i className="fa fa-map-marker"></i>22 Wolf Road, California</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-item">
                                    <p><i className="fa fa-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="info-item">
                                    <p><i className="fa fa-phone"></i><a href="tel:+1 234 567 8900">+1 234 567 8900</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form  onSubmit={handleSubmit} >
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Name</label>
                                        <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange}  placeholder="E.g. John Sina"  />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} id="email" placeholder="E.g. email@example.com" required="required" data-validation-required-message="Please enter your email" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control" id="subject" name="submit" value={formData.subject} onChange={handleChange} placeholder="E.g. Room Booking" required="required" data-validation-required-message="Please enter a subject" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <label>Message</label> 
                                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="E.g. I need a premium room" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="button"><button type="submit" >Send Message</button></div>
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