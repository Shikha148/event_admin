import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./navbar.component";

const Event = props => (
  <tr>
    <td>{props.event.topic}</td>
    <td>{props.event.domain}</td>
    <td>{props.event.date.substring(0,10)}</td>
    <td>{props.event.start_time}</td>
    <td>{props.event.end_time}</td>
    <td>
      <Link to={"/editevent/"+props.event._id}>edit</Link> | 
      <a href="#" onClick={() => { if(window.confirm("do you really want to delete?")===true){props.deleteEvent(props.event._id) }}}> delete</a> 
    </td>
  </tr>
)

export default class EventsList extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this)

    this.state = {events : []};
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/events/')
      .then(response => {
        this.setState({ events: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  deleteEvent(id) {
   
    axios.delete('http://localhost:5000/events/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      events: this.state.events.filter(el => el._id !== id)
    })
  
  }

  eventList() {
    return this.state.events.map(currentevent => {
      return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
    })
  }

  render() {
    return (
      <div>
         <Navbar/>
        <h3>Conference Details</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Topic</th>
              <th>Domain</th>
              <th>Date</th>
              <th>Start time</th>
              <th>End time</th>
            </tr>
          </thead>
          <tbody>
            { this.eventList() }
          </tbody>
        </table>
      </div>
    )
  }
}