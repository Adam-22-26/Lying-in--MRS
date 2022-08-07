

const query = require("../data-access/query")
module.exports = async(req, res)=>{
    const getAccountsUnVerified = await query.getAllUnverifiedAccounts()
    if(getAccountsUnVerified.success){
        res.status(200).send(getAccountsUnVerified)
    }else{ //its so funny
        res.status(200).send(getAccountsUnVerified)
    }
}