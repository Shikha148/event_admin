
import React, { Component } from 'react';
import Navbar from "../navbar.component";
import EventsList from "../events-list.component";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        <div>
      
      <EventsList/>
      </div>
	);
};




export default Main;