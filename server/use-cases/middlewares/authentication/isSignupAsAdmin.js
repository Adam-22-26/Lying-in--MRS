
const query = require("../../../data-access/query")
const mutation = require("../../../data-access/mutation")
module.exports = async(req, res, next)=>{
    const {account_role} = req.body;
    if(account_role.toLowerCase() === "admin"){
        const admin = await query.getAdmins()
        console.log("admin", admin, "role", account_role)
        if(admin?.length > 0){
            res.status(409).send({status: 409, message: "ADMIN ALREADY EXISTS "})
        }else{

            next()
        }
        //check niya kung wala pang admin, if wala pa, then automatically mag update yung verified: true
    }else{next()}
}
