const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

// Use the cors middleware to enable CORS
app.use(cors());

const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

// Serve the options array as JSON
app.get("/api/options", (req, res) => {
  res.json(options);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
