const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:[true,"Username is required"],
        unique:[true , "Username already exists"]
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:[true , "Email already exists"]
    },
    password:{
        type:String,
        require:[true,"Password is required"],
        select:false
    }
})

const userModel = mongoose.model("User" , userSchema)
module.exports = userModel