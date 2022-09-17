const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req,res) => {
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {

    const topic = req.body.topic;
    const domain = req.body.domain;
    const description = req.body.description;
    const no_of_seats = req.body.no_of_seats;
    const mode = req.body.mode;
    const price = req.body.price;
    const date = Date.parse(req.body.date);
    const start_time =req.body.start_time;
    const end_time = String(req.body.end_time);
    const organiser = req.body.organiser;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    const speakers_fname = req.body.speakers_fname;
    const speakers_mname = req.body.speakers_mname;
    const speakers_lname = req.body.speakers_lname;
    const speakers_title = req.body.speakers_title;
    const about_speaker = req.body.about_speaker;
    const code = req.body.code;
    const phone = req.body.phone;
    const email = req.body.email
    
    const newEvent = new Event({topic,domain,description,no_of_seats,mode,price,date,start_time,end_time,organiser,address1,address2,city,state,pincode,speakers_fname,speakers_mname,speakers_lname,
    speakers_title,about_speaker,code,phone,email});

    
    newEvent.save()
    .then(() => res.json('Event added!'))
    .catch(err => res.status(400).json('Errors: '+ err));
});

router.route('/:id').get((req, res) =>{
    Event.findById(req.params.id)
    .then(event => res.json(event))
    .catch(err => res.status(400).json('Errors: '+ err));
});

router.route('/:id').delete((req, res) =>{
    Event.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted'))
    .catch(err => res.status(400).json('Errors: '+ err));
});

router.route('/update/:id').post((req,res) => {
    Event.findById(req.params.id)
    .then(event => {
        event.topic = req.body.topic;
        event.domain = req.body.domain;
        event.description = req.body.description;
        event.no_of_seats = req.body.no_of_seats;
        event.mode = req.body.mode;
        event.price = req.body.price;
        event.date = Date.parse(req.body.date);
        event.start_time =req.body.start_time;
        event.end_time = String(req.body.end_time);
        event.organiser = req.body.organiser;
        event.address1 = req.body.address1;
        event.address2 = req.body.address2;
        event.city = req.body.city;
        event.state = req.body.state;
        event.pincode = req.body.pincode;
        event.speakers_fname = req.body.speakers_fname;
        event.speakers_mname = req.body.speakers_mname;
        event.speakers_lname = req.body.speakers_lname;
        event.speakers_title = req.body.speakers_title;
        event.about_speaker = req.body.about_speaker;
        event.code = req.body.code;
        event.phone = req.body.phone;
        event.email = req.body.email

    event.save()
        .then(() => res.json('Event Updated!'))
        .catch(err => res.status(400).json('Errors: '+ err));

    })
    .catch(err => res.status(400).json('Errors: '+ err));
});

module.exports = router;
