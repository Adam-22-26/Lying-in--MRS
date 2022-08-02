
const {userModel, patientFormModel} = require("../model/index")

module.exports = {
    ...require('./user.query')(userModel),
    ...require("./patient.form.query")(patientFormModel)
}