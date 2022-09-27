import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import Navbar from "./components/navbar.component"
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";
import EventList from "./components/events-list.component";

import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const user= localStorage.getItem("token");
  return (
    <Router>
      <div className="container" >
      
      <br/>
      <Routes>
      <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/login" exact element={<Login />}/>
        
        {user && <Route path="/" exact element={<Main/>}/>}
       
        <Route path="/" exact element={<Navigate replace to ="/login"/>}/>
        {user && <Route path="/editevent/:id" render element={<EditEvent/>} />}
        {user && <Route path ="/createEvent" element={<CreateEvent/>}/>}
        {user && <Route path ='/eventList' element={<EventList/>} />}
      </Routes>
      </div>
    </Router>
  );
} 
export default App;