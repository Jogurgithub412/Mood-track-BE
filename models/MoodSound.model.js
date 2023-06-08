const { Schema, model } = require("mongoose");

const moodSoundSchema = new Schema({
  mood: {
    type: String,
    enum: ['Happy','Excited','Optimistic','Serene','Relaxed','Bored', 'Apathetic','Lonely','Sad','Frustrated','Anxious','Irritated','Livid','Fed Up']
  },
  sound:String ,
  url:{
    type: String
  }
});

const MoodSound = model("MoodSound", moodSoundSchema);

module.exports = MoodSound;