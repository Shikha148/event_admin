import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor:"#4835d4"}}>
        <Link to="/" className="navbar-brand">EventTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Events</Link>
          </li>
          
          <li className="navbar-item">
          <Link to="/createEvent" className="nav-link">Create Event</Link>
          </li>
          
          <li className="navbar-item">
          <Link to="/eventList" className="nav-link">Show Events</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}