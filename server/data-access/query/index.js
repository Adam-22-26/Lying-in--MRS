const userModel = require("../model/user.model")

module.exports = {
    ...require('./user')(userModel)
}