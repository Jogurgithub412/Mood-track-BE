const express = require("express");
const router = express.Router();
const Mood = require("../models/Mood.model");
const MoodSound = require("../models/Mood.model");

// post route to create a mood
router.post("/create-mood", async (req, res, next) => {
  const { mood, comment } = req.body;
  try {
    await Mood.create({ mood, comment });

    //const allSounds = await MoodSound.find();

    // const moodSounds = allSounds.filter((sound) => sound.mood === mood);

    //const rIndex = Math.floor(Math.random() * moodSounds.length);

    //const updated = await Mood.findByIdAndUpdate(response._id, {
    //$push: { moodSound: moodSounds[rIndex]._id },
    //});

    res.json("success");
  } catch (error) {
    res.json(error);
  }
});

// post route to create a mood
router.post("/create-mood-sound", async (req, res, next) => {
  const { mood, soundUrl } = req.body;
  try {
    let response = await MoodSound.create({ mood, soundUrl });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/moods", async (req, res, next) => {
  try {
    let allMoods =  await Mood.find();
    res.json(allMoods);
  } catch (error) {
    res.json(error);
  }
});

// get route to get all moods submitted and show them in calendar

router.get("/get-mood", async (req, res) => {
  try {
    letAllMoods = await Mood.find();
    res.json(letAllMoods);
  } catch (error) {
    res.json(error);
  }
});

//// GET /api/projects/:projectId to display specific info of a Mood in a specific day

router.get("/get-mood/:moodId", async (req, res) => {
  const moodId = req.params.moodId;

  if (!mongoose.Types.ObjectId.isValid(moodId)) {
    // status of 2xx is successful.
    // error with 4xx is client-side.
    // error with 5xx is server-side
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    let foundMood = await Mood.findById(moodId);
    res.status(200).json(foundMood);
  } catch (error) {
    res.json(error);
  }
});
// UPDATE - my mood
router.put("/update-mood/:moodId", async (req, res) => {
  const moodId = req.params.moodId;
  const { mood, comment, date } = req.body;

  try {
    let updatedMood = await Mood.findByIdAndUpdate(
      moodId,
      { mood, comment, date },
      { new: true }
    );
    res.json(updatedMood);
  } catch (error) {
    res.json(error);
  }
});

// DELETE specific mood
router.delete("/delete-mood/:moodId", async (req, res) => {
  const moodId = req.params.moodId;

  try {
    await Mood.findByIdAndDelete(moodId);
    res.json({ message: "Mood deleted successfully" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
