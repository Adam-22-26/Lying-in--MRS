const Joi = require('joi')

const signupSchema = Joi.object().keys({
    firstname: Joi.string(),
    lastname: Joi.string(),
    email: Joi.string(),
    password: Joi.string()
})
// it should be dynamic any related to account 

module.exports = {
    signupSchema,
}