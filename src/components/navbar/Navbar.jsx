import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
         <header id="header">
            <a href="index.html" className="logo"><img src="img/logo.jpg" alt="logo"/></a>
            <div className="phone"><i className="fa fa-phone"></i>+1 234 567 8900</div>
            <div className="mobile-menu-btn"><i className="fa fa-bars"></i></div>
            <nav className="main-menu top-menu">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link href="about.html">About Us</Link></li>
                    <li><Link to="/hotels">Rooms</Link></li>
                    <li><Link to="amenities.html">Amenities</Link></li>
                    <li><Link href="booking.html">Booking</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link href="contact.html">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
