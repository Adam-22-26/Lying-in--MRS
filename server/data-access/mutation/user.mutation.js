
module.exports = (User)=>{
    return {
        createUser : async(payload)=>{
            try{
                const new_user = payload
                if(new_user.account_role.toLowerCase() === "admin"){
                    new_user.verified = true;
                    const user = await new User(new_user)
                    await user.save(err=>{
                        if(err) throw new Error;
                    });
                    // console.log("successss", user)
                    if(user?._id){
                        return {success: true, id: user._id, message: "ADMIN VERIFIED"}
                    }else{
                        return  {success: false, id: user._id, message: "ADMIN FAILED TO VERIFY"}
                    }
                }else{
                    const user = await new User(payload)
                    await user.save(err=>{
                        if(err) throw new Error
                    });
                    if(user?._id){
                        return {success: true,id: user._id}
                    }else{
                        return {success: false, err}
                    }
                    
                }
                // sucess: true, user
            }catch(err){
                return {success: false, err}
            }
        }, 
        verifyUser: async(id)=>{
            try{


                const result = await User.findByIdAndUpdate(id, {$set: {verified: true}}).exec()
                // console.log("verify result",result)
                console.log("verify userrrrrrrrrr",result)
                if(result){
                    return {success: true, result}
                }else{
                    return {success: false, result}
                }
                
            }catch(err){
                return {success: false, err}
            }
        },
        deleteUser: async(id)=>{
                try{
                    const deletedUser = await User.findOneAndDelete({_id:id}).select(["-hashed_password"]).exec()
                        console.log("deletedUser---",deletedUser)
                    if(deletedUser?._id){
                        return {success: true,messsage: "user successfully deleted", deletedUser}
                    }else{
                        return {success: false,message: "cannot find user", deletedUser}
                    }
                }catch(err){
                    return {success: false,message: "error deleting user",err}
                }
        }
    }
}

