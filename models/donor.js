const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  phone: String,
  city: String,
  latitude: Number,
  longitude: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donor", donorSchema);
