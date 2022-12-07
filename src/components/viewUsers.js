import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./navbar.component";

const Event = props => (
  <tr>
    <td>{props.event.username}</td>
    <td>{props.event.email}</td>
    <td>{props.event.phone}</td>
    <td>{props.event.prof}</td>
  </tr>
)

export default class EventsList extends Component {
  constructor(props) {
    super(props);

    // this.deleteEvent = this.deleteEvent.bind(this)

    this.state = {events : []};
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/api/regi')
      .then(response => {
        this.setState({ events: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  // deleteEvent(id) {
   
  //   axios.delete('http://localhost:5000/events/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     events: this.state.events.filter(el => el._id !== id)
  //   })
  
  // }

  eventList() {
    return this.state.events.map(currentevent => {
      return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
    })
  }

  render() {
    return (
      <div>
         <Navbar/>
        <h3>Logged Events</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profession</th>
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