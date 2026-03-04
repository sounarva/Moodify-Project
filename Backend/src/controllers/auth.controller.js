const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const redisClient = require("../config/cache")

const registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400)
                .json({
                    success: false,
                    message: "All fields are required"
                })
        }

        const user = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        })

        if (user) {
            return res.status(400)
                .json({
                    success: false,
                    message: "User already exists 🚫"
                })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({
            id: newUser._id
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "3d"
            }
        )
        res.cookie("token", token)

        return res.status(201)
            .json({
                success: true,
                message: "User registered successfully 🥳",
                user: {
                    id: newUser._id,
                    name: newUser.username,
                    email: newUser.email
                }
            })
    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: "Internal server error 🚫"
            })
    }
}

const loginController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const loginIdentifier = username || email;

        const user = await userModel.findOne({
            $or: [
                { username: loginIdentifier },
                { email: loginIdentifier }
            ]
        }).select("+password");

        if (!user) {
            return res.status(400)
                .json({
                    success: false,
                    message: "Invalid credentials 🚫"
                })
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400)
                .json({
                    success: false,
                    message: "Invalid credentials 🚫"
                })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "3d"
            })
        res.cookie("token", token)


        return res.status(200)
            .json({
                success: true,
                message: "User logged in successfully 🥳",
                user: {
                    id: user._id,
                    name: user.username,
                    email: user.email
                }
            })
    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: "Internal server error 🚫"
            })
    }
}

const getMeController = async (req, res) => {
    try {
        const id = req.userId
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(404)
                .json({
                    success: false,
                    message: "User not found 🚫"
                })
        }
        return res.status(200)
            .json({
                success: true,
                message: "User found successfully 🥳",
                user
            })
    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: "Internal server error 🚫"
            })
    }
}

const logoutController = async (req, res) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401)
                .json({
                    success: false,
                    message: "Unauthorized user 🚫"
                })
        }
        // USED REDIS TO BLACKLIST THE TOKEN
        await redisClient.set(token, Date.now(), "EX", 3 * 24 * 60 * 60)

        res.clearCookie("token")
        return res.status(200)
            .json({
                success: true,
                message: "User logged out successfully ✅"
            })
    } catch (error) {
        return res.status(500)
            .json({
                success: false,
                message: "Internal server error 🚫"
            })
    }
}

module.exports = {
    registerController,
    loginController,
    getMeController,
    logoutController
}