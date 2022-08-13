const Joi = require("joi").extend(require("@joi/date"));

const note_schema = Joi.object().keys({
    title:Joi.string().empty(""),
    body: Joi.string().required(),
    user_id: Joi.string().empty(""),
    privacy: Joi.string().empty(""),
    date: Joi.string().empty(""),
    status: Joi.boolean()
})

module.exports = { note_schema };