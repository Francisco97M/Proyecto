import { Component } from "react"
import axios from "axios"
import "./styles.css"
import { Link } from "react-router-dom";
import { BsFillCalendarFill, BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import Helmet from "react-helmet"


const Location = () => {
    return (
        <div>
        <header className="header">
        <Helmet>
  <title>Location</title>
</Helmet>
 <div className="container logo-nav-container">
     <a className="logo"><img src="https://i.ibb.co/9WmBCQ4/logo.png"/></a>
     <nav className="navigation">
     <ul>
     <li><a><MdLocationOn/>  Strauss 420 Col. Los Robles, Apodaca, NL 66612</a></li> 
     <li><a href="tel:8183143571"><BsTelephoneFill/>  (81) 83143571</a></li><br/>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/Login">Sign In/Login</Link></li>
     <li><Link to="/Location">Location</Link></li>
     <li><Link to="/Appointments">Appointments</Link></li>
     <li><Link to="/Meeting"><BsFillCalendarFill/> Make an appointment!</Link></li>         
        
     </ul>
     </nav>
 </div>
</header>
<div className="ever">
<h1>Location</h1>
<h4>TopNotch Auto Repair</h4>
<h4>Strauss 420 Col. Residencial Los Robles, Apodaca, NL, 66636</h4>
<h4>(81) 8314-3571</h4>
<h4>Open: Monday - Friday 9:00 AM - 6:30 PM</h4>

    <div className="iframe">
    <iframe
          title="restaurantLocationsMaps"
          src={`https://maps.google.com/maps?q=25.7801011,-100.2587&z=15&output=embed`}
          className="map-frame"
        ></iframe></div>
    </div>

    <footer className='footpage'>
            <div className='footpage-1'>
                <div className='box'>
                    <figure>
                        <a href="#">
                            <img className="logo" src="https://i.ibb.co/9WmBCQ4/logo.png" alt="Logo"/>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2 className='top1'>About Us</h2>
                    <p className='top'> TopNotch Auto Repair</p>
                    <p className='top'> Strauss 420 Col. Los Robles, Apodaca, NL 66612</p>
                </div>
                <div className="box">
                    <h2>Follow us on social media!</h2>
                    <div className='red-social'>
                    <a href="#" className='facebook'><AiFillFacebook/></a>
                        <a href="#" className='Twitter'><AiFillTwitterSquare/></a>
                        <a href="#" className='instagram'><AiFillInstagram/></a>
                        <a href="#" className='phone'><BsTelephoneFill/></a>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <small>&copy; 2021 <b>Francisco Morales</b> - All Copyright reserved.</small>
            </div>
        </footer>

    </div>
    )
}



export default Location;