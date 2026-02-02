const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  patientName: String,
  bloodGroup: String,
  hospital: String,
  city: String,
  contact: String,
  emergency: Boolean,
  latitude: Number,
  longitude: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", requestSchema);
