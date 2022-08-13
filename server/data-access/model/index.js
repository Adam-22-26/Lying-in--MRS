const db = require("../database.mongo");
const patient_form_schema = require("./patient.form.schema")
const user_schema = require("./user.schema")
const note_schema = require("./note.schema")
const patientFormModel = db.model("Record", patient_form_schema)
const userModel = db.model("User", user_schema);
const noteModel = db.model("Note",note_schema )
module.exports = {
    patientFormModel,
    userModel,
    noteModel
}