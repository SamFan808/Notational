const router = require("express").Router();
const nanoid = require("nanoid");
const path = require("path");
// const bodyParser = require("body-parser");
// const express = require("express");
// const app = express();
// app.use(bodyParser.json());

// GET for api/notes
router.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

// POST for api/notes
router.post("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
  console.log(req.body);
});

// router.post("/api/notes", (req, res) =>
//   res.sendFile(path.join(__dirname, "../db/db.json"))
// );
// something here to display notes?

// DELETE for api/notes
router.delete("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

module.exports = router;
