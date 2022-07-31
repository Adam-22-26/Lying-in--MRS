
const {getUser} = require("./query")
module.exports = async(username, password, done)=>{
    try{
      // username is equivalent to email 
      const user = await getUser(username, password)
      if(!user){
        return done(null, false)
      }else{
        return done(null, user)
      }
    }catch(err){
      return done(err)
    }
  }