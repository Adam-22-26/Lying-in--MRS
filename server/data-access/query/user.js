

const { comparePassword } = require("../../use-cases/utils/password.util");

module.exports = (userModel)=>{
    return {
     getUser : async(email, password)=>{
        
        const user =   await userModel.findOne({email: email}).then(async(user)=>{
                if(user){             
                    const isIdentical = await comparePassword(password, user.hashed_password);
                    if(isIdentical){
                        return user
                    }else{
                        return null
                    }
                }else{
                    return null
                }
            }).catch(err=>{
                // error handler?
                return err;
            });
            if(!user){
                return null
            }else{
                return user
            }
        },
     getUsers :()=>{
        const users = userModel.find()
        if(!users){
            return null
        }else{
            return users
        }
        },
     authenticateUser :(userModel)=>{
        
        }
    }
}