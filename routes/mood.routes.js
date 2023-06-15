const router = require("express").Router();

// Require the Mood Model
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


//update or edit mood

router.put('/moods/:moodId', async (req, res)=>{
  const {moodId} = req.params;
  const {mood, comment} = req.body;

  if(!mongoose.Types.ObjectId.isValid(moodId)){
     res.status(400).json({message: 'Specified Id is not valid'}); 
     return; 
  }

  try{
      let updatedMood = await Mood.findByIdAndUpdate(moodId, 
      {mood, comment}, {new: true});
      res.json(updatedMood);
  }
  catch(error){
      res.json(error);
  }
});


// delete mood

router.delete('/moods/:moodId', async(req,res)=>{
  const {moodId} = req.params;

  if(!mongoose.Types.ObjectId.isValid(moodId)){
      res.status(400).json({message: 'Specified Id is not valid'}); 
      return; 
  }

  try{
      await Project.findByIdAndRemove(moodId);
      res.json({message: `Project with ${moodId} is removed.`});
  }
  catch(error){
      res.json(error);
  }
});

module.exports = router; 












