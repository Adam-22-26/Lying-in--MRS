

const { comparePassword } = require("../../use-cases/utils/password.util");

module.exports = (User)=>{
    return {
    isUserExist: async(email)=>{
        const user = await User.findOne({email: email}).then(async(user)=>{
            if(user) return {id: user._id}
            return {id : null}
        }).catch(err=>{
            return err
        })
        if(!user?.id){
           return {exists: false} 
        }else{
            return {exists: true}
        }
    },
     getUser : async(email, password)=>{
        
        const user =   await User.findOne({email: email}).then(async(user)=>{
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
        const users = User.find()
        if(!users){
            return null
        }else{
            return users
        }
        },
     authenticateUser :(User)=>{
        
        },
        getAdmins: ()=>{
            try{
                const admins = User.find({account_role: "Admin", verified: true}).exec()
                return admins
            }catch(err){
                return {success: false, err}
            }
        }
    }
}