const mongoose = require("mongoose");
const db = require("../database.mongo");

const userSchema = new mongoose.Schema({
  fullname: {type: String},
  gender: {type: String},
  age: {type: String},
  position: {type: String},
  account_role: {type: String},
  email: {type: String},
  hashed_password: {type: String},
  verified: {type: Boolean, default: false},
  display_photo: {type: String},
});


module.exports = userSchema


// {
//   "users": {
//       "fullname":null,
//       "gender":null,
//       "age":null,
//       "position":null,
//       "account_role":null,
//       "email":null,
//       "hashed_password":null,
//       "verified" : false,
//       "display_photo": null
//       }
// }


// user can be a admin, any role.
//ex. userModel.admin
// user is a collection of all users type ex. admin, employee, client/customer