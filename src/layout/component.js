import React from 'react';
import './styles.css'
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill, BsFillCalendarFill} from "react-icons/bs";
import { GrCopy } from 'react-icons/gr';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai"

const Layout =() =>{
    return(
        <>
 <div className="restaurant-container">
<header className="header">
    <div className="container logo-nav-container">
        <a href="#" className="logo">LOGO</a>
        <nav className="navigation">
        <ul>
        <li><a><MdLocationOn/>  Strauss 420 Col. Los Robles, Apodaca, NL 66612</a></li> 
        <li><a href="tel:8183143571"><BsTelephoneFill/>  (81)83143571</a></li><br/>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Appointments</a></li>
        <li><a href="#"><BsFillCalendarFill/>  Make an appointment</a></li>         
           
        </ul>
        </nav>
    </div>
</header>


        <footer className='footpage'>
            <div className='footpage-1'>
                <div className='box'>
                    <figure>
                        <a href="#">
                            <img src="" alt="Logo"/>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>About Us</h2>
                    <p> Lorem ipsum dolor sit amet consectetur</p>
                    <p> Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div className="box">
                    <h2>SIGUENOS</h2>
                    <div className='red-social'>
                        <a href="#" className='facebook'><AiFillFacebook/></a>
                        <a href="#" className='Twitter'><AiFillFacebook/></a>
                        <a href="#" className='instagram'><AiFillFacebook/></a>
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

    export default Layout;