const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB using env variable
    await mongoose.connect(process.env.mongodb://127.0.0.1:27017/codetogether);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;