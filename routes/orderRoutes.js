const express = require("express")
const router = express.Router()
const {newOrder, getOrders, getSingleOrder, updateOrderStatus, getAllOrders, adminOrderStatus, deleteOrder} = require('../controllers/orderControllers')

router.post('/new_order/:id',newOrder)
router.get('/get_order/:id',getOrders)
router.post('/get_single_order/:id',getSingleOrder)
router.post('/update_order_status/:id',updateOrderStatus)
router.get('/get_all_orders',getAllOrders)
router.post('/order_delivery_status/:id',adminOrderStatus)
router.delete('/delete_order/:id',deleteOrder)





module.exports = router