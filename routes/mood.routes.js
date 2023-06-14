const router = require("express").Router();

// Require the Noise Model
const Mood = require("../models/Mood.model");

// GET Route home page after the login
router.get("/home", async (req, res) => {
  try {
    let foundMoods = await Mood.find();
    res.render("Pages/MoodTracker/index.jsx", { moods: foundMoods });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
