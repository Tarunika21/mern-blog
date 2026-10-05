const mongoose = require('mongoose');

connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB connected`);
    } catch (error) {
        console.log(`Error connecting to MongoDB`);
        process.exit(1);
    }
};

module.exports = connectDB;