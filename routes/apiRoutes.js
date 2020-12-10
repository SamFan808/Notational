const router = require("express").Router();
const path = require("path");
const fs = require("fs");

// GET for api/notes
router.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../db/db.json"))
);

// POST for api/notes
router.post("/api/notes", (req, res) => {
  let db = JSON.parse(fs.readFileSync("./db/db.json"), "utf8");
  let newNote = req.body;
  let uniqueId = db.length.toString();
  newNote.id = uniqueId;
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), "utf8", (err) => {
    if (err) throw err;
    console.log("file has been saved");
  });
  res.json(db);
  console.log(req.body);
});

// DELETE for api/notes
router.delete("/api/notes", (req, res) => {
  let;
});

module.exports = router;
