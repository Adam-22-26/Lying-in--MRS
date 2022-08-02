
const user_query = require("../data-access/query")
const user_mutation = require("../data-access/mutation")
const {encryptPassword} = require("../use-cases/utils/password.util")
const accountSignupController = async (req, res, next) => {
  const {fullname, gender, age, position, account_role, email, password} = req.body

  const saltRound = 10
  const hashed_password =await encryptPassword(password, saltRound)


  const data = {
    fullname, gender, age, position, account_role, email, hashed_password
  }
  try{
    const user = await user_query.isUserExist(email)
    if(!user?.exists){
      const createUser = await user_mutation.createUser(data)
      
      if(createUser.success){
        //if req.body.account_role === admin exe: verifyUser, else response 
        if(account_role.toLowerCase() === 'admin'){
         try{
          const isverified = await user_mutation.verifyUser(createUser.id)
          if(isverified.success){
            res.status(201).send({success: true, message: "ADMIN SIGNUP SUCCESSFULLY AND VERIFIED"})
          }
         }catch(err){
          res.status(409).send({success: true, message: "ADMIN VERIFY FAILED", err})
         }
        }else{
          res
          .status(201)
          .send({
            data: {
              success: true,
              status: 201,
              message: "you were sign up",
              user: createUser,
            },
          });
        }

      }
    }else{
      res.status(409).json({ message: "Email already in use" });
    }
  }catch(err){
    console.log(err)
  }


//   try{
//     const isverified = await query.verifyUser(id)

//     if(isverified){
//         next()
//     }else{
//         res.status(409).send({status: 409, message: "CANNOT VERIFY ADMIN"})
//     }
// }catch(err){
//     console.log(err)
//     res.status(409).send({status:409, message: "VERIFIED FAILED", err})
// }
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
