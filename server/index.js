const express = require("express");
const app = express();

const stringArray = ["String 1", "String 2", "String 3"];

app.get("/", (req, res) => {
  res.json(stringArray);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
