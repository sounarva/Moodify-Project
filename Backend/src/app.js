const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config()
const app = express();
const authRoutes = require('./routes/auth.routes')
const songRoutes = require('./routes/song.routes')
const path = require("path")
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/song", songRoutes)
app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app;