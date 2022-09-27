import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => (
  <tr>
    <td>{props.event.topic}</td>
    <td>{props.event.domain}</td>
    <td>{props.event.date.substring(0,10)}</td>
    <td>{props.event.start_time}</td>
    <td>{props.event.end_time}</td>
   
  </tr>
)

export default class EventsList extends Component {
  constructor(props) {
    super(props);

    this.deleteEvent = this.deleteEvent.bind(this)

    this.state = {events : []};
  }

  componentDidMount() {
    const p=new URLSearchParams(window.location.pathname);
          const p1=p.toString();
          const path=p1.substring(15).slice(0, -1);
          axios.get('http://localhost:5000/events/'+path)
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
        <h3>Logged Events</h3>
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