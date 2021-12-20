import "./styles.css";
import { Link } from "react-router-dom";
import { BsFillCalendarFill, BsTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import Helmet from "react-helmet"

const Error404 = () => {
  return (
    <div className="restaurant-container">
      <Helmet>
  <title>Error 404</title>
</Helmet>
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
<body>
<h1>404 Error <br/> Page Not Found</h1>
<section class="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
</div>
</body>

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
  );
};

export default Error404;
