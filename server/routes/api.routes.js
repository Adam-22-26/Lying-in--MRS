const router = require('express').Router()


const isAuthenticated = require("../use-cases/middlewares/authentication/isAuthenticated")
const isAdmin = require("../use-cases/middlewares/authentication/isAdmin")
const {validatePatientForm } = require("../use-cases/middlewares/validator/joi.validator")
const patientFormController = require("../controllers/patient.form.controller")
const getPatientFormController = require("../controllers/get.patient.form.controller")
const searchDocumentController = require("../controllers/search.document.controller")
const verifyUserController = require("../controllers/verify.user.controller")

router.post("/fillup",isAuthenticated,validatePatientForm, patientFormController )

router.get("/form",isAuthenticated, getPatientFormController)

router.get("/records", isAuthenticated,searchDocumentController)

router.get("/verify", isAuthenticated,isAdmin, verifyUserController)
// for test only
router.get('/protected',isAuthenticated,(req, res)=>{
    res.status(200).json({success: true, status: 200})
} )
module.exports = {router}