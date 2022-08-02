
const query = require("../data-access/query")
module.exports = async(req, res)=>{
    const {search} = req.query
    const results = await query.getRecordByName(search)
    console.log(search)
    res.status(200).send({success: true, results})
}