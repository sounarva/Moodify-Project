const { Router } = require('express')
const { postSongController, getSongController } = require('../controllers/song.controller')
const upload = require('../middlewares/upload.middleware')

const router = Router()

router.post("/add-song", upload.single('song'), postSongController)
router.get("/get-song", getSongController)

module.exports = router