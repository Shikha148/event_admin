import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css";

export default class Navbar extends Component {

  render() {

  
      const handleLogout = () => {
        localStorage.removeItem("token");
        //window.location.reload();
        window.location = '/login';
      };
    
    return (
      
      <nav className="navbar navbar-dark navbar-expand-lg" >
        
        <nav className={styles.navbar}>
        
        <Link to="/" className="navbar-brand">CDAC</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/eventList" className="nav-link">Events</Link>
          </li>
          
          
          <li className="navbar-item">
          <Link to="/createEvent" className="nav-link">Create Event</Link>
          </li>

           <li className="navbar-item">
          <Link to="/viewUsers" className="nav-link">View Users</Link>
          </li> 

          <li className="navbar-item">
          <Link to="/viewFeedbacks" className="nav-link">View Feedbacks</Link>
          </li> 
          
          
        </ul>
        <button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
        </div>
        </nav>
      </nav>
      
    );
  }
}