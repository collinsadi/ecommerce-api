const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
const {registerUser, loginUser,resetPassword,forgotPassword} = require('../controllers/userControllers')

router.post("/create_user", registerUser)
router.post("/get_user", loginUser)
router.post("/password/forgotten", forgotPassword)
router.post("/password/reset",resetPassword)







module.exports = router