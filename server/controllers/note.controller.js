const mutation = require("../data-access/mutation")

module.exports = async(req, res, next)=>{
    try{
        console.log(req.user._id.toString())
        const data = req.body;
        data.user_id = req.user._id.toString()
        const newNote = await mutation.createNewNote(data)
        if(newNote?.success){
            res.status(201).send({...newNote})
        }else{
            res.status(200).send({...newNote})
        }
    }catch(err){
        console.log(err)
    }
}