const express = require("express");
require("dotenv").config();

// Init app
const app = express();

// Get port from environment variables or default to 3000
const port = process.env.PORT || 3000;

// Start server
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
