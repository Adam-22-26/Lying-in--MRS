// 
const Joi = require("joi")
const joiValidator = (validationSchema)=>{
    return (req, res, next)=>{
        const data = req.body;
        const {error} = validationSchema.validate(data);
        const valid = error == null;
        if(valid){
            next()
        }else{
            const {details} = error;
            const message = details.map(i=> i.message).join(',');
            console.log('error joi validator...', message)
            res.status(400).json({json: message})
        }
    }
}
const{signupSchema} = require("./schemas/signup.schema.validator")
const validateSignup = joiValidator(signupSchema)

const {formdata_joi_schema} = require("./schemas/patient.form.schema.validator")
const validatePatientForm = joiValidator(formdata_joi_schema)

const {note_schema}  = require("./schemas/note.schema.validator")
const validateNoteSchema = joiValidator(note_schema)
module.exports ={
    joiValidator,
    validateSignup,
    validatePatientForm,
    validateNoteSchema,
}
