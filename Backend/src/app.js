const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config()
const app = express();
const authRoutes = require('./routes/auth.routes')
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoutes)

module.exports = app;