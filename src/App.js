import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from "./components/navbar.component"
import EditEvent from "./components/edit-event.component";
import CreateEvent from "./components/create-event.component";
import EventList from "./components/events-list.component";

function App() {
  return (
    <Router>
      <div className="container" >
      <Navbar />
      <br/>
      <Routes>
      <Route path="/" exact element={<EventList/>} />
      <Route path="/editevent/:id" render element={<EditEvent/>} />
      <Route path ="/createEvent" element={<CreateEvent/>}/>
      <Route path='/eventList' element={<EventList/>} />
      </Routes>
      </div>
    </Router>
  );
} 
export default App;