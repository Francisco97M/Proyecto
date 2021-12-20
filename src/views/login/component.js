import React, {Component} from 'react'
import axios from 'axios'
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill, BsFillCalendarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./styles.css";
import Appointment from '../datas/component';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import Helmet from "react-helmet"


class Login extends Component{

    constructor(props){
        super(props)

        this.state={
            Name : '',
            LastName : '',
            Car: '',
            Model:'',
            Problem:'',
            Date:'',
        }
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://104.237.129.63:8009/api/login', this.state)
        .then(response => {
            console.log(response)
        })
        }

    render(){
        const{username, password, email} = this.state
        return (
            <div>
            <div className="restaurant-container">
            <Helmet>
  <title>Login</title>
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
<div className='formulario'>
    <div className='center'>
<h1>Login</h1>
<h3 className='did'>Don't you have an account? Sign in here!</h3>
<button className="appo"><Link to="/SignIn">Sign in</Link></button>
<div className='encuesta'>
     <fieldset className='fieldset'>
            <div>
                <form id="my-form" onSubmit={this.handleSubmit}>
                    <div className='preguntas'> 
                    <div class="col-25">
                        <label>Email<br/></label>
                        </div>
                        <input 
                        type='text'
                        value size = "60"
                        name='email'
                        value={email}
                        onChange={this.handleChange}></input>
                        <div class="col-25">
                        <label><br/>Password<br/></label></div>
                        <input 
                        type='password'
                        value size = "60"
                        name='password'
                        value={password}
                        onChange={this.handleChange}></input>
            <div>
                <br/>
             <button type='submit' form="my-form">Submit</button>
            </div>
                    </div>
                   
                </form>
            </div>
            </fieldset>

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
    </div>
        )
    }
}

export default Login