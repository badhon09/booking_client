import React , { useState, useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'


export default function Navbar() {

  const navigate = useNavigate();

 const [isAuthenticated, setIsAuthenticated] = useState(false);

      useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
        }
      }, []);

    const logout = (e) => {
        //alert("logout")
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    } 

  return (
    <div>
         <header id="header">
            <a href="/" className="logo"><img src="img/logo.jpg" alt="logo"/></a>
            <div className="phone"><i className="fa fa-phone"></i>+1 234 567 8900</div>
            <div className="mobile-menu-btn"><i className="fa fa-bars"></i></div>
            <nav className="main-menu top-menu">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    {/* <li><Link to="/rooms">Rooms</Link></li> */}
                    
                    <li><Link to="/contact">Contact Us</Link></li>

                    {isAuthenticated ? (
                        <>
                         <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/booking">My Booking</Link></li>
                        <li><a href='#' onClick={(e)=>logout(e)}>Logout</a></li>
                        </>
                    ) : (
                        <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                        </>
                    )

                }

                   
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}
