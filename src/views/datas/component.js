import './styles.css';
import axios from 'axios'
import React, {Component} from 'react'
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill, BsFillCalendarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';
import Helmet from "react-helmet"

class Appointment extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      posts:[]
    }
  }

  componentDidMount(){
    axios.get('http://104.237.129.63:8009/meeting/Meeting/')
    .then(response => {
      this.setState({
        posts: response.data
      })
      console.log(response.data)
    })
  }

     
  deleteRow(id, e){  
    axios.delete(`http://104.237.129.63:8009/meeting/Meeting/${id}/`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        const posts = this.state.posts.filter(item => item.id !== id);  
        this.setState({ posts });  
      })  
    
  }  
  

  render() {
    const {posts} = this.state
    return(
    <div>
       <div className="restaurant-container">
       <Helmet>
  <title>All Appointments</title>
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
  <div className='hola'>
          <h1>All of our meetings</h1>
          <h2>Don't you have an appointment yet? You can do it in the next button!</h2>
          <button className="appo">Appointments</button><br/></div>
          {
            posts.map(post => (
                <div className="card" >
                                <div className="card-content">
                                <h2 className="card-title" className="appo2">Appointment #{post.id}</h2>
                                <p className="card-title">Name: {post.Name}</p>
                                <p className="card-title">{`Last Name: ${post.LastName}`}</p>
                                <p className="card-title">{`Email: ${post.Email}`}</p>
                                <p className="card-title">{`Phone: ${post.Phone}`}</p>
                                <p className="card-title">Car: {post.Make} {post.Car} {post.Model}</p>
                                <p className="card-title">Kilometers: {post.Kilometers} km</p>
                                <p className="card-title">{`Detail: ${post.Problem}`}</p>
                                <p className="card-title">{`Date: ${post.Date.replace('T', ' ').replace('Z', '')}`}</p>
                                <button className="appo" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>  
                                </div>
                            </div>
            )) }
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
    </div>
    )
}
}

export default Appointment;