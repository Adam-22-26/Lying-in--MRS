const router = require('express').Router()

const multer = require("multer")
const DatauriParser = require('datauri/parser');
const path = require("path")
const {multerUploads} = require("../config/multer.config")(multer, DatauriParser, path)

const isAuthenticated = require("../use-cases/middlewares/authentication/isAuthenticated")
const isAdmin = require("../use-cases/middlewares/authentication/isAdmin")
const {validatePatientForm,validateNoteSchema } = require("../use-cases/middlewares/validator/joi.validator")
const patientFormController = require("../controllers/patient.form.controller")
const getPatientFormController = require("../controllers/get.patient.form.controller")
const getPatientFormsController = require("../controllers/get.patient.forms.controller")
const searchDocumentController = require("../controllers/search.document.controller")
const verifyUserController = require("../controllers/account.verify.user.controller")
const accountRequestsController = require("../controllers/account.requests.controller")
const accountVerifiedController = require("../controllers/account.verified.controller")
const accountDeleteUserController = require("../controllers/account.deleteUser.controller")
const fileuploadController = require("../controllers/fileupload.controller")
const newNoteController = require("../controllers/note.controller")
const getMyNotesController = require("../controllers/get.mynotes.controller")
const searchByObScore = require("../controllers/searchBy.obscore.controller")
const searchByDateController = require("../controllers/searchBy.date.controller")

router.post("/fillup",isAuthenticated,validatePatientForm, patientFormController )

router.get("/form",isAuthenticated, getPatientFormController)

router.get("/forms",isAuthenticated, getPatientFormsController)

router.get("/records", isAuthenticated,searchDocumentController)

router.get("/records/ob-score/",isAuthenticated, searchByObScore )
// searchByDateController
router.get("/records/date/",isAuthenticated, searchByDateController )

router.get("/account/requests", isAuthenticated,isAdmin, accountRequestsController )

router.get("/account/verified", isAuthenticated, accountVerifiedController )

router.post("/account/delete", isAuthenticated,isAdmin, accountDeleteUserController)

router.post("/verify", isAuthenticated,isAdmin, verifyUserController)

router.get("/account/myprofile", isAuthenticated, )

router.post("/addphoto",multerUploads, fileuploadController)

router.post("/new-note",isAuthenticated, validateNoteSchema,newNoteController )

router.get("/mynotes",isAuthenticated, getMyNotesController )

router.get('/isAuthenticated',isAuthenticated,(req, res)=>{
    res.status(200).send({success: true, status: 200, user: req.user})
} )
module.exports = {router}