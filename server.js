// Dependencies
const express = require("express");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// public folder path for css and index.js
app.use(express.static("public"));

// api routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

// server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
