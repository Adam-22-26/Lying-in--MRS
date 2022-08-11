const db = require("../database.mongo");
const patient_form_schema = require("./patient.form.schema")
const user_schema = require("./user.schema")

const patientFormModel = db.model("Record", patient_form_schema)
const userModel = db.model("User", user_schema);

module.exports = {
    patientFormModel,
    userModel
}