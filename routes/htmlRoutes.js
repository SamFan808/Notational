const router = require("express").Router();
const path = require("path");
const nanoid = require("nanoid");

// GET home
router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

// GET for notes.html
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

module.exports = router;