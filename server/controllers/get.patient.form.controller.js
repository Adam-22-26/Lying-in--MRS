const query = require("../data-access/query")

module.exports = async(req, res)=>{
    const {id} = req.query
    const form = await query.getRecordById(id)
    if(form.success){
        res.status(200).send(form)
    }else{
        res.status(409).send(form)
    }
}
