module.exports = (noteModel)=>{
    return{
        getMyNotes: async(myId)=>{
            try{
                    const  myNotes=  await noteModel.find({user_id: myId}).exec()
                    if(myNotes){
                        return {success: true, myNotes}
                    }else{
                        return {success: false, myNotes}
                    }
            }catch(err){
                console.log(err)
                return {success: false, err}
            }
        }
    }
}