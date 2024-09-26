import React from 'react';
import '../App.css'
import logo from '../Component/img/logo.png'
import flag from '../Component/img/flag.png'
// import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';
import icon from '../Component/img/icoon.png'


function Header() {
  return (
    <header className="trip-header">
      <div className="container"> {/* Container for consistent width */}
        <img src={logo} className='logo' alt='logo'/>

        <div className="search-bar">
          <input type="text" placeholder="Destination, attraction, hotel, etc" /> 
          <button type="submit"> <img src={icon} style={{height:'23px', width:'23px'}} alt='icon'></img></button> 
        </div>

        <nav className="main-nav">
          <ul>
            <li> <a href="/" className='list'>List Your Property</a>
            <a href="/" className='list'>App</a>
            <a href="/" className='list'>Customer Support</a></li>
          </ul>
        </nav>

        <div className="user-actions">
          <div> <img src={flag} className='flag' alt='USD'/></div>
          <div className="currency">USD</div>
          <button className="search-bookings">Search Bookings</button>
          <button className="sign-in">Sign in / Register</button>
        </div>
      </div>


      <nav className="secondary-nav">
          <ul>
            <li><a href="/" className='hover-line'>Hotels</a></li>
            <li><a href="/" className='hover-line'>Flights</a></li>
            <li><a href="/" className='hover-line'>Trains</a></li>
            <li><a href="/" className='hover-line'>Cars</a></li>
            <li><a href="/" className='hover-line'>Attractions & Tours</a></li>
            <li><a href='/' className='hover-line'>Flight+Hotel</a></li>
            <li><a href='/' className='hover-line'>Cruises</a></li>
            <li><a href='/' className='hover-line'>Custom Trips</a></li>
            <li><a href='/' className='hover-line'>Destination</a></li>
            <li><a href='/' className='hover-line'>Trip.com Rewards </a></li>
            <li><a href='/' className='hover-line'>Deals</a></li>
          </ul>
        </nav>
        
    </header>
  );
}

export default Header;