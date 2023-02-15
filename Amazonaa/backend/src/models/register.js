const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: 'string',
    isrequired: true
  },
  email: {
    type: 'string',
    isrequired: true
  },
  password: {
    type: 'string',
    isrequired: true
  },
})

userSchema.pre("save", async function (next) {

  if (this.isModified("password")) {
    console.log(`the current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password is ${this.password}`);
  }
  next();
})

const User = new mongoose.model("User", userSchema);
module.exports = User;  