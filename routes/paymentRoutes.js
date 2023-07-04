const express = require("express")
const router = express.Router()

const {newPayment, paymentStatus} = require("../controllers/paymentControllers")
const {checkLogin} = require("../controllers/userControllers")

router.post("/pay",checkLogin,newPayment)
router.get("/paid",checkLogin,paymentStatus)



module.exports = router