const express = require("express")
const router = express.Router()
const {addToCart,getCart,getCartLength,changeCartQuantity, deleteCart} = require("../controllers/cartControllers")
const { checkLogin } = require("../controllers/userControllers")
const {sendMail} = require("../controllers/emailControllers")
router.post('/add_to_cart',checkLogin,addToCart)
router.get('/get_cart' ,checkLogin,getCart)
router.get('/get_cart_length' ,checkLogin,getCartLength)
router.post('/change_cart_product_quantity/:id', changeCartQuantity)
router.delete('/delete_cart_item',checkLogin, deleteCart)



router.get("/send", sendMail)






module.exports = router