
const query = require("../../../data-access/query")
module.exports = async(req, res,next)=>{
    const {email, password} = req.body
    const user = await query.getUser(email, password)
    if(user?.verified){
        next()
    }else{
        res.status(409).send({status:409, verified: false, success: false, message: "MAYBE EMAIL NOT VERIFIED YET"})
    }
}
