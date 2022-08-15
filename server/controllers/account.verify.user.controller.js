
const mutation = require("../data-access/mutation")
module.exports = async(req, res)=>{
    const {id} = req.query
    console.log(req.user.account_role)
    const isVerified = await mutation.verifyUser(id)
    console.log("isVerified", isVerified)
    if(isVerified?.success){
        res.status(201).send({success: true, isVerified})
    }else{
        res.status(200).send({success:false, id})
    }
    
}