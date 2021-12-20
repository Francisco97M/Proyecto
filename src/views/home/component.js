import React from 'react';
import './styles.css'
import { GrCopy } from 'react-icons/gr';
import { Link } from "react-router-dom";
import { BsFillCalendarFill, BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import Helmet from "react-helmet"

const Home =() =>{
    return(
        <>
<Helmet>
  <title>TOPNotch Auto Repair</title>
</Helmet> <div className="restaurant-container">
 <header className="header">
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
<div className="home-container">
      <div className="half-section-1">
        <div className="half-section-1-content"> 
          <div className="new-announcement">
          <img className="hamburger-half" alt="Hamburger not load :("
        src="https://pngimg.com/uploads/mazda/mazda_PNG102.png"/>
          </div>
          <p className="half-product-name">TOP <br/>NOTCH<br/>AUTO<br/>REPAIR</p>
          <p className="half-product-description">The best at doing the job.
            <br/>Since 1992.
          </p>
        </div>
      </div>
      <div className="half-section-2">
        <p className="clubhouse-title"> YOU WANT TO <br/> BE PART OF US?</p>
        <p className="clubhouse-description">
          Register and login to be a user for the community of TOPNotch and our future exclusives!
        </p>
        <button className="appo"><Link to="/Login">Sign in/Login</Link></button>
      </div>
      <div className="info-section-2">
        <div className="info-section-2-content-1">
          <span>Location</span>
        </div>
        <div className="info-section-2-content-2">
          <p>Wanna know our location?</p>
        </div>
        <button className="appo"><Link to="/Location">Location</Link></button>
      </div>
      <div className="product-section-3">
        <div className="cool-phrase-container">
          <p className="phrase-title">{'"Make an appointment!"'}</p>
          <p className="phrase-title"><button className="appo"><Link to="/Meeting">Make an appointment</Link></button></p>
                  </div>
      </div>
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
              </>
      );
    };

    export default Home;