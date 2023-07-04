const express = require("express")
const router = express.Router()

const {newPayment, paymentStatus} = require("../controllers/paymentControllers")


router.post("/pay",newPayment)
router.get("/paid",paymentStatus)



module.exports = router