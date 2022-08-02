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
const isVerified = require("../use-cases/middlewares/authentication/isVerified")
const isSignupAsAdmin = require("../use-cases/middlewares/authentication/isSignupAsAdmin")
// url, authentication, authorization
// authentidation is an optional if we want the user after signing up will automatically logged in.(after verified)
//isSignupAsAdmin = prevent to have multiple verified admins
router.post("/signup",  validateSignup, isSignupAsAdmin, accountSignupController);

const loginController = require("../controllers/login.controller")
router.post("/login", isVerified, passport.authenticate("local_strategy",),  loginController);


module.exports = { router };

