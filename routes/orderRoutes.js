const express = require("express")
const router = express.Router()
const {newOrder} = require('../controllers/orderControllers')

router.post('/new_order/:id',newOrder)





module.exports = router