const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  lname: {
    type: String,
    required: true,
    min: 3,
    max: 15,
  },
  roll: {
    type: String,
    required: true,
    min: 6,
    max: 15,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    max: 50,
  },
  dob: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: "male",
  },
  phone: {
    type: Number,
    required: true,
  },
  stream: {
    type: String,
    default: "CSE",
  },
  year: {
    type: String,
    default: "1st Year",
  },
  domains: {
    type: String,
  },
});

module.exports = mongoose.model("Users", userSchema);
