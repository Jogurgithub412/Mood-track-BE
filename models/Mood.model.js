const {Schema, model } = require("mongoose");

const moodSchema = new Schema({
  mood: [{
    type: String,
    enum: ['Happy','Excited','Optimistic','Serene','Relaxed','Bored', 'Apathetic','Lonely','Sad','Frustrated','Anxious','Irritated','Livid','Fed Up']
  }],
  comment: {
    type: String,
  },
  date: {type: Date,
  default: Date.now()},
  
  
});

const Mood = model("Mood", moodSchema);

module.exports = Mood;



