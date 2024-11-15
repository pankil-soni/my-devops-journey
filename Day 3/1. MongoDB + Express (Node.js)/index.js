const express = require("express");
const User = require("./models/user");
const connectDb = require("./db");

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = "mongodb://mongo:27017/mydatabase";

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
connectDb(mongoUri);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Create a new user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
