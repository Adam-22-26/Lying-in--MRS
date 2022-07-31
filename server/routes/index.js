const express = require('express')


const router = express.Router()
router.use("/auth/user", require("./auth.routes").router)
router.use("/api",require("./api.routes").router)

module.exports ={
    router
}