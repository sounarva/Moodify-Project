const mongoose = require("mongoose")

const connectToDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connected Successfully ✅")
    } catch (error) {
        console.log("DB Connection Failed ❌")
    }
}

module.exports = connectToDB