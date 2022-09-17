
const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const eventSchema = new Schema({

    topic: {type: String,required: true},
    domain: {type: String,required: true},
    description: {type: String,required: true},
    no_of_seats: {type: Number,required: true},
    mode: {type: String,required : true},
    price: {type: Number,required: true},
    date: {type: Date,required: true},
    start_time: {type: String,required: true},
    end_time: {type: String,required: true},
    organiser: {type: String,required: true},
    address1: {type: String,required: true},
    address2: {type: String,required: true},
    city: {type: String,required: true},
    state: {type: String,required: true},
    pincode: {type: Number,required: true},
    speakers_fname: {type: String,required: true},
    speakers_mname: {type: String},
    speakers_lname: {type: String,required: true},
    speakers_title: {type: String,required: true},
    about_speaker: {type: String,required: true},
    code: {type: Number,required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true}

},

{timestamps: true});

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;