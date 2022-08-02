
module.exports = (patientFormModel)=>{
    return {
        createNewRecord: async(payload)=>{
            try{
                const newRecord = await new patientFormModel(payload)
                await newRecord.save(err=>{
                    //handle errors
                    if(err) return {success: false, err}
                })
                return {success: true, id:newRecord.id, message: "new record added"}
            }catch(err){
                return {success: false, err}
            }
        }
    }
}