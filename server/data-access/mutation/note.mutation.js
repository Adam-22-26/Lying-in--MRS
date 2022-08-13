module.exports = (noteModel)=>{
    return {
        createNewNote: async(payload)=>{
            try{
                const newNote = await new noteModel(payload)
                await newNote.save(err=>{
                    console.log(err)
                    if(err) return
                })
                if(newNote){
                    return{success: true, id:newNote._id, message: "new note added"}
                }
            }catch(err){
                return {success: false, err}
            }
        }
    }
}