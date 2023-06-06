const express = require("express");
const router = express.Router();

// Get Route to display into about Mind Tracks
router.get("/About", (req, res)=> {
    res.render('')
})

module.exports = router;
