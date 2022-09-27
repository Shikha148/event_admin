
import React, { Component } from 'react';
import Navbar from "C:/Users/SHIKHA/vs-apps/mern-exercise-tracker/src/components/navbar.component.js";
import EventsList from "C:/Users/SHIKHA/vs-apps/mern-exercise-tracker/src/components/events-list.component.js";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        <div>
      <Navbar/>
      
      <EventsList/>
      </div>
	);
};




export default Main;