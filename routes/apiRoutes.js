const router = require("express").Router();
const nanoid = require("nanoid");

// GET for api/notes
router.get("/api/notes", (req, res) => res.json(notes));
// POST for api/notes
router.post("/api/notes", (req, res) => res.json(notes));
// something here to display notes

// DELETE for api/notes
router.delete("/api/notes", (req, res) => res.json(notes));

module.exports = router;
