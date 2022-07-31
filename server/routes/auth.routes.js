// packages
const router = require("express").Router();
const passport = require("passport");
// modules
const {
  accountSignupController,
} = require("../controllers/signup.controller.js");
const {
  validateSignup,
} = require("../use-cases/middlewares/validator/joi.validator");

// url, authentication, authorization
// authentidation is an optional if we want the user after signing up will automatically logged in.
router.post("/signup", validateSignup, accountSignupController);

const loginController = require("../controllers/login.controller")
router.post("/login", passport.authenticate("local_strategy",), loginController);


module.exports = { router };

