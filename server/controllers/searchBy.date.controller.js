const query = require("../data-access/query");

module.exports = async(req, res)=>{
    const {search} = req.query;
    const results = await query.getPatientByCertainDate(search);
    res.status(200).send(results)

}