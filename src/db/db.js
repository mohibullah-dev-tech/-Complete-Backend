const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb+srv://yt:fqDfzl8gq9myhRsi@yt-complete-backend.agnizig.mongodb.net/projects-1");
    console.log("Connected to DB");
}

module.exports = connectDB;