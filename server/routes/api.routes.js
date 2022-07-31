const router = require('express').Router()

const isAuthenticated = require("../use-cases/middlewares/authentication/isAuthenticated")

router.get('/protected',isAuthenticated,(req, res)=>{
    res.status(200).json({success: true, status: 200})
} )

module.exports = {router}