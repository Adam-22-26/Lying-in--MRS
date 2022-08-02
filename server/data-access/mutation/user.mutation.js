
module.exports = (User)=>{
    return {
        createUser : async(payload)=>{
            try{
                const user = await new User(payload)
                await user.save(err=>{
                    if(err) throw new Error
                });
                return {success: true, id: user._id.toString()}
            }catch(err){
                return {success: false, err}
            }
        }, 
        verifyUser: async(id)=>{
            try{
                const result = await User.findOneAndUpdate({_id: id}, {$set: {verified: true}})
                return {success: true, result}
            }catch(err){
                return {success: false, err}
            }
        },
        deleteUser: async(id)=>{

        }
    }
}

