// const {getUser, createUser} = require("../use-cases/database.services/user.mongoose.service");

const SignupLogic = require("../entities/signup.logic");
const userModel = require("../data-access/model/user.model")
const {encryptPassword} = require("../use-cases/utils/password.util")

const accountSignupController = async (req, res, next) => {
  const {firstname, lastname, email, password} = req.body

  const saltRound = 10
  const hashed =await encryptPassword(password, saltRound)
  const signupLogic = new SignupLogic(userModel);

  const data = {
    firstname: firstname,
    lastname:lastname,
    email: email,
    hashed_password: hashed
  }
  try {
    const getUser = await signupLogic.getUser(data); // check if user is exisiting 
    if (!getUser.length > 0) { 
      const createUser = await signupLogic.createUser(data); //else create new user
      if (createUser) {
        res
          .status(201)
          .send({
            data: {
              success: true,
              status: 201,
              data: "you were sign up",
              user: createUser,
            },
          });
      }
    } else {
      res.status(409).json({ serverMessage: "Email already in use" });
      return;
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err });
  }


  // validate or check if the inputs are corresponds to the needs of entities
  /* 
    promise based
    accountSignupValidator({firstname, email, password})
    if above function was response "OK" below codes will be executed.

    */

  // if validator,  queryies, then call next function

  //  authentication, authenticator, seperate and add as middleware to the routes
  // console.log('after validating ..adding the user to database');
};
module.exports = {
  accountSignupController,
};
