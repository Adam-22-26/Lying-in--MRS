
const mutation = require("../data-access/mutation")
module.exports = async(req, res)=>{
    const {id} = req.query
    console.log(req.user.account_role)
    const isVerified = await mutation.verifyUser(id)
    res.status(200).send({success:true, id})
}