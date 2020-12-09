const router = require("express").Router();
const nanoid = require("nanoid");
const path = require("path");

// GET for api/notes
router.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

//

// POST for api/notes
router.post("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);
// something here to display notes?

// DELETE for api/notes
router.delete("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

module.exports = router;
