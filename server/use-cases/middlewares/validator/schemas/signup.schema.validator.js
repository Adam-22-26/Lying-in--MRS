const Joi = require('joi')

const signupSchema = Joi.object().keys({
    fullname: Joi.string().regex(new RegExp(/^(?![\s.]+$)[a-zA-Z\s.]*$/)).required(),
    gender: Joi.string(),
    age: Joi.number(),
    position: Joi.string(),
    account_role: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    display_photo: Joi.string().min(6).required()
    
})
// it should be dynamic any related to account 

module.exports = {
    signupSchema,
}