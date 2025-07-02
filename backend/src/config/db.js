const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/noteapp", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected successfully");
    } catch (error) {
        console.error("Connection Error", error);
    }
};

module.exports = { connectDB };