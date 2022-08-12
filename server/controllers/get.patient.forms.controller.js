
// getTodayRecord
const query = require("../data-access/query")
module.exports = async(req, res, next)=>{
    try{
        const {date} = req.query
        console.log("dateeeeee", date)
        const records = await query.getTodayRecord(date)
        if(records?.success){
            res.status(201).send({...records})
        }else{
            res.status(409).send({...records})
        }

    }catch(err){
        console.log(err)
        res.status(409).send({success: false, err})

    }
}