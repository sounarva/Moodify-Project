const mongoose = require('mongoose')
const blackListSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required for blacklisting"]
    }
}, {
    timestamps: true
})

const blackListModel = mongoose.model("Blacklist", blackListSchema)
module.exports = blackListModel