const express = require("express")
const router = express.Router()
const {newOrder, getOrders, getSingleOrder, updateOrderStatus, getAllOrders, adminOrderStatus, deleteOrder, filterOrder} = require('../controllers/orderControllers')
const {checkLogin} = require("../controllers/userControllers")
router.post('/new_order',checkLogin,newOrder)
router.get('/get_order',checkLogin,getOrders)
router.post('/get_single_order',checkLogin,getSingleOrder)
router.post('/update_order_status',checkLogin,updateOrderStatus)
router.get('/get_all_orders',getAllOrders)
router.post('/order_delivery_status/:id',adminOrderStatus)
router.delete('/delete_order/:id',deleteOrder)
router.post('/filter_orders',filterOrder)





module.exports = router