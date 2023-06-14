const router = require("express").Router();

// Require the sound Model
const Sound = require("../models/Sound.model");

// GET Route home page after the login
router.get("/moodsound", async (req, res) => {
  try {
    let foundsounds = await Sound.find();
   // res.render("pages/moodsound/index.jsx", { sounds: foundsounds });
   res.json(foundsounds)
  } catch (error) {
    console.log('Error in moodsound route', error);
  }
});

module.exports = router;

