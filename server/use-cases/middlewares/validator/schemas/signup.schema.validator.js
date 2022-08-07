const Joi = require('joi')

const signupSchema = Joi.object().keys({
    fullname: Joi.string().required(),
    gender: Joi.string(),
    age: Joi.number(),
    position: Joi.string(),
    account_role: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    
})
// it should be dynamic any related to account 

module.exports = {
    signupSchema,
}