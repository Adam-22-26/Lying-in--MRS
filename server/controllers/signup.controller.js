
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
      const newUser = await user_mutation.createUser(data)
      
      if(newUser?.success){
          res.status(201).send(newUser) 
      }else{
        //conflic 409
        res.status(200).send(newUser)
      }
    }else{
      res.status(409).send({ success:false, message: "Email already in use" });
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
