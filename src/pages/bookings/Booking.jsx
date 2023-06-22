import React from 'react';
import Navbar from '../../components/navbar/Navbar.jsx';
import Footer from '../../components/footer/Footer.jsx';
import useFetch from '../../hooks/useFetch.js';
import { Grid } from 'react-loader-spinner';

const Booking = () => {
	const storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser);
   let userId = user.data._id
	  const {data, loading ,error} = useFetch("http://127.0.0.1:3001/api/bookings/all/"+userId);
	  console.log("aaaaaaaaa"+data);


	return (
		
			<div>
			<Navbar/>
			{loading ? (<>
				<Grid
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="grid-loading"
				radius="12.5"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				/>
			</>) : ( 
			

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
					      <td>{item.checkOut}</td>
					       <td>{item.totalPrice}</td>
					        <td>
					        	{item.isPaid==true ? (
					        				"Paid"
					        			
					        		) : (
					        			<button  type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal">Pay</button>
					        		)
					        	
					        	}
					        </td>
					    </tr>

					))}
					    
				  </tbody>
				</table>
				</div>

			</>
	
			)}

				<div
				className="modal fade"
				id="exampleModal"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
						Modal title
						</h5>
						<button
						type="button"
						className="close"
						data-dismiss="modal"
						aria-label="Close"
						>
						<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">

					<>
  {/* This script got from frontendfreecode.com */}
  <div className="row">
    <div className="col-lg-12 mx-auto">
      <div className="card">
        <div className="card-header">
          <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
            {/* Credit card form tabs */}
            <ul
              role="tablist"
              className="nav bg-light nav-pills rounded nav-fill mb-3"
            >
              <li className="nav-item">
                <a
                  data-toggle="pill"
                  href="#credit-card"
                  className="nav-link active"
                >
                  {" "}
                  <i className="fas fa-credit-card mr-2" /> Credit Card{" "}
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="pill" href="#paypal" className="nav-link">
                  {" "}
                  <i className="fab fa-paypal mr-2" /> Paypal{" "}
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="pill" href="#net-banking" className="nav-link">
                  {" "}
                  <i className="fas fa-mobile-alt mr-2" /> Net Banking{" "}
                </a>
              </li>
            </ul>
          </div>
          {/* End */}
          {/* Credit card form content */}
          <div className="tab-content">
            {/* credit card info*/}
            <div id="credit-card" className="tab-pane fade show active pt-3">
              <form role="form">
                <div className="form-group">
                  <label htmlFor="username">
                    <h6>Card Owner</h6>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Card Owner Name"
                    required=""
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">
                    <h6>Card number</h6>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Valid card number"
                      className="form-control"
                      required=""
                    />
                    <div className="input-group-append">
                      <span className="input-group-text text-muted">
                        {" "}
                        <i className="fab fa-cc-visa mx-1" />{" "}
                        <i className="fab fa-cc-mastercard mx-1" />{" "}
                        <i className="fab fa-cc-amex mx-1" />{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label>
                        <span className="hidden-xs">
                          <h6>Expiration Date</h6>
                        </span>
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          placeholder="MM"
                          name=""
                          className="form-control"
                          required=""
                        />{" "}
                        <input
                          type="number"
                          placeholder="YY"
                          name=""
                          className="form-control"
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mb-4">
                      <label
                        data-toggle="tooltip"
                        title="Three digit CV code on the back of your card"
                      >
                        <h6>
                          CVV <i className="fa fa-question-circle d-inline" />
                        </h6>
                      </label>
                      <input type="text" required="" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    type="button"
                    className="subscribe btn btn-primary btn-block shadow-sm"
                  >
                    Confirm Payment
                  </button>
                </div>
              </form>
            </div>
            {/* End */}
            {/* Paypal info */}
            <div id="paypal" className="tab-pane fade pt-3">
              <h6 className="pb-2">Select your paypal account type</h6>
              <div className="form-group">
                <label className="radio-inline">
                  {" "}
                  <input type="radio" name="optradio" defaultChecked="" />{" "}
                  Domestic{" "}
                </label>{" "}
                <label className="radio-inline">
                  {" "}
                  <input type="radio" name="optradio" className="ml-5" />
                  International{" "}
                </label>
              </div>
              <p>
                <button type="button" className="btn btn-primary">
                  <i className="fab fa-paypal mr-2" /> Log into my Paypal
                </button>
              </p>
              <p className="text-muted">
                Note: After clicking on the button, you will be directed to a
                secure gateway for payment. After completing the payment
                process, you will be redirected back to the website to view
                details of your order.
              </p>
            </div>
            {/* End */}
            {/* bank transfer info */}
            <div id="net-banking" className="tab-pane fade pt-3">
              <div className="form-group">
                <label htmlFor="Select Your Bank">
                  <h6>Select your Bank</h6>
                </label>
                <select className="form-control" id="ccmonth">
                  <option value="" selected="" disabled="">
                    --Please select your Bank--
                  </option>
                  <option>Bank 1</option>
                  <option>Bank 2</option>
                  <option>Bank 3</option>
                  <option>Bank 4</option>
                  <option>Bank 5</option>
                  <option>Bank 6</option>
                  <option>Bank 7</option>
                  <option>Bank 8</option>
                  <option>Bank 9</option>
                  <option>Bank 10</option>
                </select>
              </div>
              <div className="form-group">
                <p>
                  <button type="button" className="btn btn-primary">
                    <i className="fas fa-mobile-alt mr-2" /> Proceed Payment
                  </button>
                </p>
              </div>
              <p className="text-muted">
                Note: After clicking on the button, you will be directed to a
                secure gateway for payment. After completing the payment
                process, you will be redirected back to the website to view
                details of your order.
              </p>
            </div>
            {/* End */}
            {/* End */}
          </div>
        </div>
      </div>
    </div>
  </div>
</>


					</div>
					<div className="modal-footer">
						<button
						type="button"
						className="btn btn-secondary"
						data-dismiss="modal"
						>
						Close
						</button>
						<button type="button" className="btn btn-primary">
						Save changes
						</button>
					</div>
					</div>
				</div>
				</div>

			<Footer/>

			</div>

		)

}


export default Booking;