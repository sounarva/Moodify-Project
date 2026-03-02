const jwt = require('jsonwebtoken')
const redisClient = require("../config/cache")

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401)
                .json({
                    success: false,
                    message: "Unauthorized user"
                })
        }

        // USED REDIS TO BLACKLIST THE TOKEN FOR FASTER ACCESS
        const blackListedToken = await redisClient.get(token)
        
        if (blackListedToken) {
            return res.status(401)
                .json({
                    success: false,
                    message: "Invalid token"
                })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.id
        next()
    } catch (error) {
        return res.status(401)
            .json({
                success: false,
                message: "Invalid token"
            })
    }
}

module.exports = {
    authMiddleware
}