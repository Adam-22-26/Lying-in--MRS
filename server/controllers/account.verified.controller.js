const query = require("../data-access/query")
module.exports = async(req, res)=>{
    const getVerifiedAccounts = await query.getVerifiedAccounts()
    if(getVerifiedAccounts.success){
        res.status(200).send(getVerifiedAccounts)
    }else{
        res.status(200).send(getVerifiedAccounts)
    }
}