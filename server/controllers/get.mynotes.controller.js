const query = require("../data-access/query")

module.exports = async(req, res)=>{
    const myId = req.user._id.toString()
    const myNotes = await query.getMyNotes(myId)
    if(myNotes.success){
        res.status(200).send(myNotes)
    }else{
        res.status(200).send(myNotes)
    }
}