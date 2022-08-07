

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
        getAdmins: async()=>{
            try{
                const admins = User.findOne({account_role: "admin",verified: true }).exec()
                // console.log("getAdmins", admins)
                return admins
            }catch(err){
                return {success: false, err}
            }
        },
        getAllUnverifiedAccounts : async()=>{
            try{
                const unverified =  await User.find({verified:false}).select(["-hashed_password"]).exec()
                console.log(unverified)
                if(unverified?.length > 0){
                    return {success: true, unverified}
                }else{
                    return {success: false, unverified}
                }
            }catch(err){
                return {success: false, err}
            }
        },
        getVerifiedAccounts :async()=>{
            try{
                const verified =  await User.find({verified:true}).select(["-hashed_password"]).exec()

                if(verified?.length > 0){
                    return {success: true, verified}
                }else{
                    return {success: false, verified}
                }
            }catch(err){
                return {success: false, err}
            }
        },
        getUserLoggedInInfo: async(id)=>{

        }
    }
}