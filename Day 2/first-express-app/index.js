const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(5000, () => {
  console.log("🚀 Server is running on port 3000");
});
