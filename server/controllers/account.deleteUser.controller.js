const  mutation = require("../data-access/mutation");

module.exports = async(req, res)=>{
    const {id} = req.query;
    console.log("id", id)
    const deletedUser = await mutation.deleteUser(id)
    if(deletedUser.success){
        res.status(200).send(deletedUser)
    }else{
        res.status(200).send(deletedUser)
    }
}
