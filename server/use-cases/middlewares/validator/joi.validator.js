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

module.exports ={
    joiValidator,
    validateSignup
}
