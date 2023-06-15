import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import Contact from './pages/contact/Contact';
import Booking from './pages/bookings/Booking';
import RoomDetails from './pages/roomdetails/RoomDetails';
import Registration from './pages/registration/Registration';
import { Profile } from './pages/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/room-details/:id" element={<RoomDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/rooms" element={<Hotel/>}/>
        <Route path="/rooms/:id" element={<Hotel/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
