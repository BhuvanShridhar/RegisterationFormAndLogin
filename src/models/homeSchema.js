const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = new mongoose.model("UserSchemas", schema);
module.exports = UserSchema;
