const {userModel, patientFormModel, noteModel} = require("../model/index")

module.exports = {
    ...require('./user.mutation')(userModel),
    ...require("./patient.form.mutation")(patientFormModel),
    ...require("./note.mutation")(noteModel),
}