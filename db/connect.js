const mongoose = require('mongoose');

const connectDB = async (url) => {
  const conn = await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;