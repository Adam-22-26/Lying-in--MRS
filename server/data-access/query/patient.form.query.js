const { formdata_joi_schema } = require("../../use-cases/middlewares/validator/schemas/patient.form.schema.validator")


module.exports = (patientFormModel)=>{
    return {
        getRecords : async()=>{

        },
        getRecordByName: async(search)=>{
            try{
                const patient_form_results = await patientFormModel.find({"patient_information.name": {$regex: search, $options: 'i'}}).select(["patient_information.name","date", "time", "_id"]).exec()
                return {success: true, patient_form_results}
            }catch(err){
                console.log(err)
                return {success: false, err}
            }
        },
        getRecordByDate: async()=>{

        },
        getRecordById: async(id)=>{
            try{
                const form = await patientFormModel.findById(id).exec()
                return {success: true, form}
            }catch(err){
                console.log(err)
                return {succes: false, err}
            }
        }
    }
}
