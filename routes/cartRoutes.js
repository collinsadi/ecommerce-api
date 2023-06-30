const express = require("express")
const router = express.Router()
const {addToCart,getCart,getCartLength,changeCartQuantity} = require("../controllers/cartControllers")

router.post('/add_to_cart/:id',addToCart)
router.get('/get_cart/:id',getCart)
router.get('/get_cart_length/:id',getCartLength)
router.post('/change_cart_product_quantity/:id', changeCartQuantity)







module.exports = router