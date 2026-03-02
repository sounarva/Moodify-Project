const redis = require("ioredis").default

const redisClient = new redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
})

redisClient.on("connect" , ()=>{
    console.log("Redis Connected Successfully ✅")
})

module.exports = redisClient