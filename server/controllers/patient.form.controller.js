const mutation = require("../data-access/mutation")
module.exports = async(req, res, next)=>{
    try{
        const data = req.body;
        const form = await mutation.createNewRecord(data)
        if(form?.success){
            res.status(201).send({...form})
        }else{
            res.status(409).send({...form})
        }
    }catch(err){
        console.log(err)
    }
}