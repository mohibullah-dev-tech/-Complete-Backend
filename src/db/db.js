const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect("mongodb+srv://yt:fqDfzl8gq9myhRsi@yt-complete-backend.agnizig.mongodb.net/mohibullah")

    console.log("connected to DB ");
}

module.exports = connectDB