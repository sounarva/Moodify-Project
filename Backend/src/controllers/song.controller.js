const songModel = require('../models/song.model')
const id3 = require('node-id3')
const { uploadFile } = require('../services/storage.service')

const postSongController = async (req, res) => {
    const songBuffer = req.file.buffer
    const tags = id3.read(songBuffer)
    const { mood } = req.query

    if (!mood) {
        return res.status(400)
            .json({
                success: false,
                message: "Mood is required"
            })
    }

    const [songUrl, posterUrl] = await Promise.all([
        uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/moodify/songs"
        }),
        uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpg",
            folder: "/moodify/song-posters"
        })
    ])

    const song = await songModel.create({
        title: tags.title,
        songUrl: songUrl.url,
        posterUrl: posterUrl.url,
        mood
    })

    return res.status(201)
        .json({
            success: true,
            message: "Song uploaded successfully ✅",
            song
        })
}

const getSongController = async (req, res) => {
    const { mood } = req.query

    if (!mood) {
        return res.status(400)
            .json({
                success: false,
                message: "Mood is required"
            })
    }

    const songs = await songModel.find({
        mood
    })

    return res.status(200)
        .json({
            success: true,
            message: "Songs fetched successfully ✅",
            songs
        })
}

module.exports = {
    postSongController,
    getSongController
}