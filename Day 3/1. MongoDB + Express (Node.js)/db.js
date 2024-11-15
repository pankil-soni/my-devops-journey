const mongoose = require("mongoose");
const connectDb = (mongoUri) => {
  return mongoose
    .connect(mongoUri)
    .then(() => console.log("✅ Connected to MongoDB successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
};

module.exports = connectDb;
