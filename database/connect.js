const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to ${response.connection.host}`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
