const { Schema, model } = require("mongoose");

const soundSchema = new Schema(
    {
        name: String,
        imageUrl: String,
        sound: String,
    },
    {
        timestamps: true
    }
);

const Mood = model("Sound", soundSchema);

module.exports = Sound;
