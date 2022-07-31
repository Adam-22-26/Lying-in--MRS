const mongoose = require("mongoose");
const db = require("../database.mongo");

const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, required: true },
  hashed_password: { type: String, required: true },
});

const UserModel = db.model("User", userSchema);
module.exports = UserModel;


// user can be a admin, any role.
//ex. userModel.admin
// user is a collection of all users type ex. admin, employee, client/customer