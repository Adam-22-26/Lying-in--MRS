const {userModel, patientFormModel} = require("../model/index")

module.exports = {
    ...require('./user.mutation')(userModel),
    ...require("./patient.form.mutation")(patientFormModel)
}