const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://BIJAY:eEySLRaf24Ejzww@cluster0.brc6x78.mongodb.net/test"
);


mongoose.connection.once("open", () => {
  console.log("✅ MongoDB connected");
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Temporary in-memory storage
let donors = [];
let requests = [];

// Register donor
app.post("/api/donors", (req, res) => {
  donors.push(req.body);
  res.json({ message: "Donor registered successfully!" });
});

// Post blood request
app.post("/api/requests", (req, res) => {
  requests.push(req.body);
  res.json({ message: "Blood request received!" });
});

// Get all donors
app.get("/api/donors", (req, res) => {
  res.json(donors);
});

// Get all requests
app.get("/api/requests", (req, res) => {
  res.json(requests);
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});

const Donor = require("./models/Donor");

app.post("/api/donors", async (req, res) => {
  const donor = new Donor(req.body);
  await donor.save();
  res.json({ message: "✅ Donor saved permanently" });
});

const Request = require("./models/Request");

app.post("/api/requests", async (req, res) => {
  const request = new Request(req.body);
  await request.save();
  res.json({ message: "🩸 Blood request saved permanently" });
});

app.get("/api/donors", async (req, res) => {
  const donors = await Donor.find();
  res.json(donors);
});

app.get("/api/requests", async (req, res) => {
  const requests = await Request.find();
  res.json(requests);
});

require("dotenv").config()
mongoose.connect(process.env.MONGO_URI)