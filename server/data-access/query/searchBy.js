


module.exports = (patientFormModel) => {
    return {
        getObScores: async (search) => {
            try {
                const patientWithObScore = await patientFormModel.find({ "patient_information.obs_score": { $regex: search, $options: 'i' } }).select(["patient_information.name","patient_information.ob_score", "date", "time", "_id"]).exec()
                console.log("patientWithObScore.", patientWithObScore)
                return { success: true, patientWithObScore }

            } catch (err) {
                console.log(err)
                return { success: false, err }
            }
        },
        getPatientByCertainDate: async (searchData) => {
            try {
                const patientByCertainDate = await patientFormModel.find({ "date": { $regex: searchData, $options: 'i' } }).select(["patient_information.name", "date", "time", "_id"]).exec()

                return { success: true, patientByCertainDate }
            } catch (err) {
                console.log(err)
                return { success: false, err }
            }
        }
    }
}