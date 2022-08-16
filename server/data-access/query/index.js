
const {userModel, patientFormModel, noteModel} = require("../model/index")

module.exports = {
    ...require('./user.query')(userModel),
    ...require("./patient.form.query")(patientFormModel),
    ...require("./note.query")(noteModel),
    ...require("./searchBy.js")(patientFormModel)
}