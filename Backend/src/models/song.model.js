const mongoose = require('mongoose')
const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    songUrl: {
        type: String,
        required: true
    },
    posterUrl: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        enum: {
            values: ["happy", "sad", "surprised", "neutral"],
            message: "Mood is not valid"
        }
    }
})

const songModel = mongoose.model("song", songSchema)
module.exports = songModel