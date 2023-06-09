const router = require("express").Router();

// Require the sound Model
const Mood = require("../models/Sound.model");

// GET Route home page after the login
router.get("/moodsound", async (req, res) => {
  try {
    let foundsounds = await Sound.find();
    res.render("pages/moodsound.jsx", { sounds: foundsounds });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

