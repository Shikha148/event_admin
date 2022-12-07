const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
     required: true,
  },
  email: {
    type: String,
     required: true,
  },
  phone: {
    type: Number,
     required: true,
  },
  aphone: {
    type: Number,
     required: true,
  },
  ad1: {
    type: String,
     required: true,
  },
  ad2: {
    type: String,
    required: true,
  },
  state: {
    type: String,
     required: true,
  },
  pin: {
    type: Number,
     required: true,
  },
  prof: {
    type: String,
     required: true,
  },
  edq: {
    type: String,
     required: true,
  },
  cllg: {
    type: String,
     required: true,
  },
  course: {
    type: String,
    required: true,
  },
  yop: {
    type: Date,
     required: true,
  },
  cemail: {
    type: String,
  },
  cgpa: {
    type: Number,
  },
  compT: {
    type: String,
  },
  cname: {
    type: String,
  },
  ccemail: {
    type: String,
  },
  cadd: {
    type: String,
  },
  desg: {
    type: String,
  },
  yoe: {
    type: Number,
  },
  pass: {
    type: String,
    required: true,
  },
  cpass: {
    type: String,
    required: true,
  },
  sques: {
    type: String,
    required: true,
  },
  sans: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("REGISTRATIONS", userSchema);

module.exports = User;
