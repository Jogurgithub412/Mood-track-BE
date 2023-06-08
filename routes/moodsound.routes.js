const router = require("express").Router();

// Require the Noise Model 
const Mood = require('../models/MoodSound.model');

// GET Route home page after the login
router.get("/home", async (req, res) => {
  try{
    let foundMoods = await Mood.find();
    res.render('mood/moodsound.routes.js', {moods: foundMoods});
    }
    catch(error){
        console.log(error);
    }
});

module.exports = router;