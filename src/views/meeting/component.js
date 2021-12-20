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



class AppPost extends Component{

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
        axios.post('http://104.237.129.63:8009/meeting/Meeting/', this.state)
        .then(response => {
            window.alert("The appointment was succesfully appointed!");
            console.log(response)
        })
        }

    render(){
        const{Name, LastName, Email, Phone, Car, Model, Make, Kilometers, Problem, Date} = this.state
        return (
            <div>
            <div className="restaurant-container">
            <Helmet>
  <title>Appointment</title>
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
<h1>Make Appointment</h1>
<h3 className='did'>Did you already did an appointment? You can see here!</h3>
<button className="appo"><Link to="/Appointments">Appointment</Link></button>
<h2 className='fill'>Fill your data for an appointment!</h2>
<div className='encuesta'>
     <fieldset className='fieldset'>
            <div>
                <form id="my-form" onSubmit={this.handleSubmit}>
                    <div className='preguntas'> 
                    <div class="col-25">
                        <label>Name<br/></label>
                        </div>
                        <input 
                        type='text'
                        value size = "60"
                        name='Name'
                        value={Name}
                        onChange={this.handleChange}></input>
                        <div class="col-25">
                        <label><br/>Last Name<br/></label></div>
                        <input 
                        type='text'
                        value size = "60"
                        name='LastName'
                        value={LastName}
                        onChange={this.handleChange}></input>
                        <div class="col-25"><label><br/>Phone<br/></label></div>
                        <input 
                        type='text'
                        name='Phone'
                        value size = "60"
                        value={Phone}
                        onChange={this.handleChange}></input>
                        <div class="col-25"><label><br/>Email<br/></label></div>
                        <input 
                        type='text'
                        name='Email'
                        value size = "60"
                        value={Email}
                        onChange={this.handleChange}></input>
                        <div class="col-25"><label><br/>Make<br/></label></div>
                        <input 
                        type='text'
                        name='Make'
                        value size = "60"
                        value={Make}
                        onChange={this.handleChange}></input>
                        <div class="col-25"><label><br/>Car<br/></label></div>
                        <input 
                        type='text'
                        name='Car'
                        value size = "60"
                        value={Car}
                        onChange={this.handleChange}></input>
                         <div class="col-25"><label><br/>Model<br/></label></div>
                        <input 
                        type='text'
                        name='Model'
                        value size = "60"
                        value={Model}
                        onChange={this.handleChange}></input>
                         <div class="col-25"><label><br/>Kilometers<br/></label></div>
                        <input 
                        type='text'
                        name='Kilometers'
                        value size = "60"
                        value={Kilometers}
                        onChange={this.handleChange}></input>
                         <div class="col-25"><label><br/>Problem<br/></label></div>
                        <textarea 
                        type='text'
                        name='Problem'
                        cols="60"
                        rows="5"
                        value={Problem}
                        onChange={this.handleChange}></textarea>
                         <div class="col-25"><label><br/>Date<br/></label></div>
                        <input 
                        type='datetime-local'
                        name='Date'
                        value={Date}
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

export default AppPost