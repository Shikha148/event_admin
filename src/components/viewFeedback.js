import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./navbar.component";

const Event = props => (
  <tr>
    <td>{props.event.email}</td>
    <td>{props.event.star}</td>
    <td>{props.event.description}</td>
  </tr>
)

export default class EventsList extends Component {
  constructor(props) {
    super(props);

    // this.deleteEvent = this.deleteEvent.bind(this)

    this.state = {events : []};
  }

  componentDidMount() {
    
    axios.get('http://localhost:5000/api/feedback')
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
        <h3>Logged feedbacks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Email</th>
              <th>Ratings</th>
              <th>Description</th>
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