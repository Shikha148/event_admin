import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import countrydata from './Countrydata.json';
import domaindata from './Domain.json';
import DatePicker from 'react-datepicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col,Card } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class CreateEvents extends Component{
    constructor(props) {
        super(props);

        this.onChangeTopic = this.onChangeTopic.bind(this);
        this.onChangeDomain = this.onChangeDomain.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeSeats = this.onChangeSeats.bind(this);
        this.onChangeMode = this.onChangeMode.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeStart_time = this.onChangeStart_time.bind(this);
        this.onChangeEnd_time = this.onChangeEnd_time.bind(this);
        this.onChangeOrganiser = this.onChangeOrganiser.bind(this);
        this.onChangeAddress1 = this.onChangeAddress1.bind(this);
        this.onChangeAddress2 = this.onChangeAddress2.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangePincode = this.onChangePincode.bind(this);
        this.onChangeFName = this.onChangeFName.bind(this);
        this.onChangeMName = this.onChangeMName.bind(this);
        this.onChangeLName = this.onChangeLName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAbout = this.onChangeAbout.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          topic: '',
          domain: '',
          description: '',
          no_of_seats: 0,
          mode: "Online",
          price: 0,
          date: new Date(),
          start_time: '',
          end_time: '',
          organiser: "CDAC NOIDA",
          address1: '',
          address2: '',
          city: '',
          state: '',
          pincode: 122001,
          speakers_fname:'',
          speakers_mname:'',
          speakers_lname:'',
          speakers_title: "Mr",
          about_speaker: '',
          code: 91,
          phone: '',
          email: '',
          get_state: '',
          no_change: 0
          }
        }

        componentDidMount() {
          const p=new URLSearchParams(window.location.pathname);
          const p1=p.toString();
          const path=p1.substring(15).slice(0, -1);
            axios.get('http://localhost:5000/events/'+path)
      .then(response => {
        this.setState({
          topic: response.data.topic,
          domain: response.data.domain,
          description: response.data.description,
          no_of_seats: response.data.no_of_seats,
          mode: response.data.mode,
          price: response.data.price,
          date: new Date(response.data.date),
          start_time: response.data.start_time,
          end_time: response.data.end_time,
          organiser: response.data.organiser,
          address1: response.data.address1,
          address2: response.data.address2,
          city: response.data.city,
          state: response.data.state,
          pincode: response.data.pincode,
          speakers_fname: response.data.speakers_fname,
          speakers_mname: response.data.speakers_mname,
          speakers_lname: response.data.speakers_lname,
          speakers_title: response.data.speakers_title,
          about_speaker: response.data.about_speaker,
          code: response.data.code,
          phone: response.data.phone,
          email: response.data.email
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
    }
        onChangeTopic(e) {
            this.setState({
              topic: e.target.value
            })
          }
        
          onChangeDomain(e) {
            this.setState({
              domain: e.target.value
            })
          }
        
          onChangeDescription(e) {
            this.setState({
              description: e.target.value
            })
          }

          onChangeSeats(e) {
            this.setState({
              no_of_seats: e.target.value
            })
          }

          onChangeMode(e) {
            this.setState({
              mode: e.target.value
            })
          }

          onChangePrice(e) {
            this.setState({
              price: e.target.value
            })
          }
          
          onChangeDate(date) {
            this.setState({
              date: date
            })
          }

          onChangeStart_time(e) {
            this.setState({
              start_time: e.target.value
            })
          }

          onChangeEnd_time(e) {
            this.setState({
              end_time: e.target.value
            })
          }

          onChangeOrganiser(e) {
            this.setState({
              organiser: e.target.value
            })
          }

          onChangeAddress1(e) {
            this.setState({
              address1: e.target.value
            })
          }

          onChangeAddress2(e) {
            this.setState({
              address2: e.target.value
            })
          }

          onChangeCity(e) {
            this.setState({
              city: e.target.value
            })
          }

          onChangeState(e) {
            this.setState({
              state: e.target.value
            })
          }

          /*onChangePincode(e) {
            this.setState({
              pincode: e.target.value
            })
          }*/
//extra code
          onChangePincode(e) {
            this.setState({ 
              pincode: e.target.value,
              no_change: 1
             });
            if (e.target.value.length === 6) {
              this.setState({
                error: ""
              });
              axios
                .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
                .then(res =>
                  this.setState({
                    get_state: res.data[0].PostOffice[0].State
                  })
                )
                .then(res => console.log(res.data));
                
            }
          }
          
          onChangeFName(e) {
            this.setState({
              speakers_fname: e.target.value
            })
          }

          onChangeMName(e) {
            this.setState({
              speakers_mname: e.target.value
            })
          }

          onChangeLName(e) {
            this.setState({
              speakers_lname: e.target.value
            })
          }

          onChangeTitle(e) {
            this.setState({
              speakers_title: e.target.value
            })
          }

          onChangeAbout(e) {
            this.setState({
              about_speaker: e.target.value
            })
          }

          onChangeCode(e) {
            this.setState({
              code: e.target.value
            })
          }

          onChangePhone(e) {
            this.setState({
              phone: e.target.value
            })

            
          }
          onChangeEmail(e) {
            this.setState({
              email: e.target.value
            })
          }

          onSubmit(e) {
            e.preventDefault();

            const event = {
              topic: this.state.topic,
              domain: this.state.domain,
              description: this.state.description,
              no_of_seats: this.state.no_of_seats,
              mode: this.state.mode,
              price: this.state.price,
              date: this.state.date,
              start_time: this.state.start_time,
              end_time: this.state.end_time,
              organiser: this.state.organiser,
              address1: this.state.address1,
              address2: this.state.address2,
              city: this.state.city,
              state: this.state.state,
              pincode: this.state.pincode,
              speakers_fname: this.state.speakers_fname,
              speakers_mname: this.state.speakers_mname,
              speakers_lname: this.state.speakers_lname,
              speakers_title: this.state.speakers_title,
              about_speaker: this.state.about_speaker,
              code: this.state.code,
              phone: this.state.phone,
              email: this.state.email,
              }
              const pattern_ph= /^[6789]\d{9}$/;
              //const pattern_em=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
              const pattern_em=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
              //const pattern_em=/[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
              
              const ph= this.state.phone.toString();
              const em=this.state.email.toString();
              const pin= this.state.pincode.toString();
              const get_st=this.state.get_state.toString();
              
              
              if(!(pattern_ph.test(ph)))
              {
                alert("mobile number not valid");
                return false;
              }
              if(!(pattern_em.test(em)))
              {
                alert("email not valid");
                return false;
              }
              if(!(pin.length===6))
              {
                alert("pincode should be of length 6");
                return false;
              }
              if(this.state.no_change===1)
              {
              if(!(get_st===this.state.state ))
              {
                alert("pincode not valid");
                return false;
              }
            }
            
              
              /*if(!(pattern_pin1.test(pin)||pattern_pin2.test(pin)||pattern_pin3.test(pin)||pattern_pin4.test(pin)||pattern_pin5.test(pin)||pattern_pin6.test(pin)||pattern_pin7.test(pin)||pattern_pin8.test(pin)))
              {
                alert("pin code not valid");
                return false;
              }*/
              
              const p=new URLSearchParams(window.location.pathname);
              const p1=p.toString();
              const path=p1.substring(15).slice(0, -1);

              console.log(event);
              axios.post('http://localhost:5000/events/update/'+path, event)
      .then(res => console.log(res.data));
              window.location = '/';
          }

    render() {
      
        return (
          
          <div>
              <h3>Edit Event </h3>
              <form onSubmit={this.onSubmit}>
                <div className="h-100 " style={{backgroundcolor: "#000"}}>
                  <div className="container py-5 h-100" >
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                      <div className="col-12" >
                        <div className="card card-registration card-registration-2" style={{borderradius: "15px"}}>
                          <Card >
                            <Row className="row g-0" >
                              <div className="col-lg-6" >
                                <div className="p-5" >
                                <h3 className="fw-normal mb-5" style={{ color: "#000"}}>Venue Infomation</h3>

                                

                                <div class="mb-4 pb-2">
                                <label class="form-label" for="form3Examplea9">Select Organiser:</label>
                                <br/>
                    <select class="select" required value={this.state.organiser} onChange={this.onChangeOrganiser}>
                    <option value="Select Organiser" selected disabled>Select Organiser</option>
                      <option value="CDAC NOIDA">CDAC NOIDA</option>
                      <option value="CDAC DELHI">CDAC DELHI</option>
                    </select>
                  </div>
                  
                  <div class="mb-4 pb-2">
                                <Form.Group >
                                <label class="form-label" for="form3Examplea9">Address:</label>
                                

                                  <Form.Group>
                                  <label class="form-label" for="form3Examplea9">houseno,building name(required):</label>
                                  
                                  <Form.Control type="text" placeholder="topic" required value={this.state.address1} onChange={this.onChangeAddress1}/>
                                  </Form.Group>
                                  <Form.Group >
                                  <label class="form-label mt-4" for="form3Examplea9">road name,area,colony(required):</label>
                                  
                                  <Form.Control type="text" placeholder="domain" required value={this.state.address2} onChange={this.onChangeAddress2}/>
                                  </Form.Group>
                                  <Form.Group >
                                  <label class="form-label mt-4" for="form3Examplea9">City(required):</label>
                                  
                                  <Form.Control type="text" placeholder="domain" required value={this.state.city} onChange={this.onChangeCity}/>
                                  </Form.Group>
                                  </Form.Group>
                                  <div class="mt-4 pb-2">
                                <Row >
                                <Col>
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">Select State:</label>
                                <select class="select" value={this.state.state} onChange={this.onChangeState} >
                                <option value="" select disabled >--Select--</option>
                                {
                                    countrydata.map((getcountry,index)=>(
                                      <option value={getcountry.state_name} key={index}>{getcountry.state_name}</option>
                                    ))

                                }
                                  
                                </select>
                              </Form.Group>
                                </Col>
                                <Col>
                                
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">PinCode:</label>
                                <Form.Control type="number" id="pincode" placeholder="pincode" required value={this.state.pincode} onChange={this.onChangePincode}/>
                                </Form.Group>
                                </Col>
                                </Row>
                               
                                </div>
                                </div>
                                <div class="row">
                                <label class="mb-3">Speakers name :</label>

                                <div class="mb-4 pb-2">
                                <select class="select" value={this.state.speakers_title} onChange={this.onChangeTitle}>
                                <option value="Title" selected disabled>Select Title</option>
                                  <option value="Mr">Mr.</option>
                                  <option value="Miss">Miss.</option>
                                  <option value="Mrs">Mrs.</option>
                                </select>
                              </div>

                                <div class=" mb-4 pb-2">

                                <Row >
                                <Col>
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">First Name:</label>
                                <Form.Control type="text" placeholder="Name" required value={this.state.speakers_fname} onChange={this.onChangeFName}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">Middle Name:</label>
                                <Form.Control type="text" placeholder="Name" value={this.state.speakers_mname} onChange={this.onChangeMName}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">Last Name:</label>
                                <Form.Control type="text" placeholder="Name" required value={this.state.speakers_lname} onChange={this.onChangeLName}/>
                                </Form.Group>
                                </Col>
                                </Row>

                                </div>
                                
                                <div class="mb-4 pb-2">
                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">About Speaker:</label>
                                <Form.Control as="textarea" rows={2} required value={this.state.about_speaker} onChange={this.onChangeAbout}/>
                                
                                </Form.Group>
                                </div>

                                <div class="row">
                                <div class="col-md-5 mb-4 pb-2">

                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">Code + :</label>
                                <Form.Control type="number" placeholder="91" required value={this.state.code} onChange={this.onChangeCode}/>
                                
                               </Form.Group>

                                </div>
                                <div class="col-md-7 mb-4 pb-2">
                                <Form.Group>
                                <label class="form-label" name="ph" id="phoneno" for="form3Examplea9">Phone Number:</label>
                                <Form.Control type="number"
                                 placeholder="XXXXXXXXXX" required value={this.state.phone} onChange={this.onChangePhone}/>
                               </Form.Group>
                                </div>
                                <div class=" mb-4 pb-2">

                                <Form.Group>
                                <label class="form-label" for="form3Examplea9">Email :</label>
                                <Form.Control type="email" placeholder="Example@abc.com" required value={this.state.email} onChange={this.onChangeEmail}/>
                                </Form.Group>

                                </div>
                                
                                </div>
                              </div>

                              </div>
                            </div>


                            <div class="col-lg-6 bg-indigo text-white" >
                              <div class="p-5">
                                <h3 class="fw-normal mb-5">Event Details</h3>
                                

                                <Form className='mb-4'>
                                  <Form.Group>
                                  <label class="form-label" for="form3Examplea9">Topic:</label>
                                  
                                  <Form.Control type="text" placeholder="topic" required value={this.state.topic} onChange={this.onChangeTopic}/>
                                  </Form.Group>
                                  

                                  <Form.Group class="mb-4">
                                  <Row>
                                  
                                    <Col>
                                  <label class="form-label mt-4" for="form3Examplea9">Domain of an Event:</label>
                                  
                                  </Col>
                                  <Col>
                                <select class="select mt-4" required value={this.state.domain} onChange={this.onChangeDomain} >
                                <option value="" select disabled>--Select--</option>
                                {
                                    domaindata.map((getcountry,index)=>(
                                      <option value={getcountry.domain_name} key={index}>{getcountry.domain_name}</option>
                                    ))

                                }
                                </select>
                                </Col>
                                  </Row>
                                  </Form.Group>
                                
                                  <div class="mb-4 pb-2">
                                  <Form.Group>
                                  <label class="form-label" for="form3Examplea9">Description of Event:</label>
                                  <Form.Control as="textarea" rows={2} required value={this.state.description} onChange={this.onChangeDescription}/>
                                  
                                  </Form.Group>

                                  </div>
                                  
                                  

                                <div class="mb-4 pb-2">
                                  <Row>
                                    <Col>
                                <label class="form-label" for="form3Examplea9">Select Mode of an Event: </label>
                                </Col>
                                <Col>
                    <select class="select" required value={this.state.mode} onChange={this.onChangemode}>
                    <option value="Select Organiser" selected disabled>Select Organiser</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>
                    </Col>
                    </Row>
                  </div>
                  


                                <Form class="mb-4">
                                <Row>
                                <Col>
                                <Form.Group>
                                <label class="form-label mt-4" for="form3Examplea9">Number of seats:</label>
                                  <Form.Control type="number" placeholder="no of seats" required value={this.state.no_of_seats} onChange={this.onChangeSeats}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                                <label class="form-label mt-4" for="form3Examplea9">Price per seat:</label>
                                  <Form.Control type="number" placeholder="price per seat" required value={this.state.price} onChange={this.onChangePrice}/>
                                </Form.Group>
                                </Col>
                                </Row>
                                </Form>
                                
                                </Form>

                                
                                <Form>
                                <Form.Group class="mb-4">
                                <div className="form-group">
                                <label>Date: </label>
                                <div>
                                  <DatePicker
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                  />
                                </div>
                                </div>
                                
                                </Form.Group>
                                </Form>
                                
                                <Form class="mt-4 mb-4">
                              <Row>
                                <Col>
                                <Form.Group>
                    
                  <label class="form-label" for="form3Examplea9">Start time:</label>
                  <Col>
                  <Form.Control type="text" placeholder="topic" required value={this.state.start_time} />
                                  
                  </Col>
                  <Col>
                  <Form.Control type="time" name="start_time" required selected={this.state.start_time} onChange={this.onChangeStart_time} />
                  </Col>
                  </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group>
                    
                  <label class="form-label" for="form3Examplea9">End time:</label>
                  <Col>
                  <Form.Control type="text" placeholder="topic" required value={this.state.end_time} />
                                  
                  </Col>
                  <Form.Control type="time" name="end_time" required selected={this.state.end_time} onChange={this.onChangeEnd_time} />
                  
                  </Form.Group>
                                </Col>
                                </Row>

                                
                                </Form>
                  
                                <div className="form-group" >
                  <input type="submit" value="Edit Event" className="btn btn-primary" style={{ marginTop:15,color:"#000",backgroundColor: "#FFF000"}}/>
                </div>

                              </div>
                            
                            </div>
              
                          </Row>
                        </Card>
                      </div>
                    </div>
                </div>
                
              </div>
              
            </div>
            </form>
            </div>
            )
    }
}