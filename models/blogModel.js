const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const blogSchema = new mongoose.Schema({

  title: { type: String, required: "Cannot be empty" },
  comSentence: { type: String, required: "Cannot be empty" },
  titlecomImage: { type: String, required: "Cannot be empty" },
  blog: { type: String, required: "Cannot be empty" },
  date: { type: Date, default: Date.now },

});

module.exports = mongoose.model("Blog", blogSchema);