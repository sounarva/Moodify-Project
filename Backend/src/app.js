const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config()
const app = express();
const cors = require("cors")
const authRoutes = require('./routes/auth.routes')
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/v1/auth", authRoutes)

module.exports = app;