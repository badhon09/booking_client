import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';

export default function Login(){
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
                    <div className="col-md-6">
                        <div className="login-form">
                            <form>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Name</label>
                                        <input type="text" className="form-control" required="required" />
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required="required" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Password</label>
                                        <input type="password" className="form-control" required="required" />
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Repeat Your Password</label>
                                        <input type="password" className="form-control" required="required" />
                                    </div>
                                </div>
                                <div className="button"><button type="submit">Registration</button></div>
                            </form>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="login-form">
                            <form>
                                <div className="form-row">
                                    <div className="control-group col-sm-6">
                                        <label>Your Email</label>
                                        <input type="email" className="form-control" required="required" />
                                    </div>
                                    <div className="control-group col-sm-6">
                                        <label>Your Password</label>
                                        <input type="password" className="form-control" required="required" />
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