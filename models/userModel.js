const mongoose = require("mongoose");
const passportlocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})

UserSchema.plugin(passportlocalMongoose);

module.exports = mongoose.model("User", UserSchema);