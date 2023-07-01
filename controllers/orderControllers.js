const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')
const Inbox = require("../models/inboxModel")
const User = require("../models/userModel")



const newOrder = async(request, response)=>{

    const userId = request.params.id

    
    
    try{
        
        
        const allcarts = await Cart.find({ userId })

        const products = allcarts.flatMap(product=> product.products)

        console.log(products)

        if(!products){

            response.status(404).json({status:"error", message:"No Item to Order"})
            return
        }

        if(products && products.length === 0){

            response.status(404).json({status:"error", message:"No Item to Order"})
            return
        }

        

        const neworder = await Order.create({userId,products})
        await neworder.save()


        const user = await User.findById(userId)

        const cart = await Cart.deleteMany({userId})

        

        const date = new Date().toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

        const inbox = await Inbox.create({userId,title:"New Order Placed", description:"Order Placed Successfuully",body:`${user.first_name}, You Placed a New Order today ${date},Please Go to the Orders Page and Confirm the Order By adding the Required Informations for the Order or Cancel the Order, Thanks`})

        await inbox.save()

        response.status(200).json({ status: 'success', message: 'Order created successfully' });
    }catch(error){
        console.log(error)
        response.status(500).json({status:"error", message:"an Error Occured"})
    }

}


const getOrders = async (request, response) => {

    const userId = request.params.id

    try {
        
        const orders = await Order.find({ userId })
        
        if(!orders){

            response.status(404).json({status:"error", message:"Orders Were Not Found"})
            return
        }

        
        response.status(200).json({status:"Success", userOrders: orders})

    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const getSingleOrder = async (request, response) => {
    
    const userId = request.params.id
    const {orderId} = request.body

    try {
    
        const order = await Order.findById(orderId)

        if (!order) {

            response.status(404).json({status:"error", message:"Order Not Found"})
            return
        }

        if (order.userId !== userId) {
            
            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }


        response.status(200).json({status:"Success", order})

    } catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const updateOrderStatus = async (request, response) => {
    
    const userId = request.params.id

    const { action, shippingAddress, deliveryMethod, nearestJunction,orderId } = request.body
    
    try {

        const ordertoEdit = await Order.findById(orderId)

        if(ordertoEdit.userId !== userId){

            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }
        
        if (action === "cancel") {
        
            const order = await Order.findByIdAndUpdate(orderId, { orderStatus: "Cancelled" , closed: true})
            
            await order.save()

            const user = await User.findById(userId)

            const date = new Date(ordertoEdit.createdAt).toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

        const inbox = await Inbox.create({userId,title:"Order Cancelled", description:"Order Cancelled Successfully",body:`${user.first_name}, You Cancelled Your Order that was Placed on ${date},If this was a mistake You can add Items to Cart and Reorder and Dont't Forget to Confirm the Order in the Order's Page, Feel Comfortable and Shopp Our Website, Add Your Favorite Items to Cart So You Don't Loose Sight of Them, If any Trouble You Can Reach Out to Us Using the Support Chat, Thanks`})

        await inbox.save()



            response.status(200).json({status:"Success", message:"Order Cancelled Successfully"})
            return

        }

        if (action === "confirm") {
            
            if (!shippingAddress) {
                
                response.status(404).json({status:"error", message:"Shipping Address Needed to Confirm Order"})
                return
            }
            if (!deliveryMethod) {
                
                response.status(404).json({status:"error", message:"Delivery Method Needed to Confirm Order"})
                return
            }
            if (!nearestJunction) {
                
                response.status(404).json({status:"error", message:"Nearest Bus Stop Needed to Confirm Order"})
                return
            }


            const order = await Order.findByIdAndUpdate(orderId, {shippingAddress, deliveryMethod, nearestJunction, orderStatus:"Confirmed"})

            await order.save()


            const user = await User.findById(userId)

            const date = new Date(ordertoEdit.createdAt).toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

        const inbox = await Inbox.create({userId,title:"Order Confirmed ", description:"Order Confirmed Successfully",body:`${user.first_name}, You Confirmed Your Order that was Placed on ${date}, You Would Receive More information about Your Order Status on the Open Orders Page, Feel Comfortable and Shop Our Website, Add Your Favorite Items to Cart So You Don't Loose Sight of Them, If any Trouble You Can Reach Out to Us Using the Support Chat, Thanks`})

        await inbox.save()



            response.status(200).json({status:"Success", message:"Order Confirmed SuccessFully"})

            return

        }

        
        response.status(400).json({status:"error", message:"un Processable Entity"})


    } catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const getAllOrders = async (request, response) => {
    
    try {
    
        const orders = await Order.find()

        response.status(200).json({status:"success",orders})


    } catch (error) {

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const adminOrderStatus = async(request,response)=> {
    
    const orderId = request.params.id
    const action = request.body.action

    try{

        if (action === "shipped") {
            
            const order = await Order.findByIdAndUpdate(orderId,{orderStatus: "Shipped"})
            await order.save()

            const shippedOrder = await Order.findById(orderId)
          


            const user = await User.findById(shippedOrder.userId)

            const date = new Date(shippedOrder.createdAt).toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

        const inbox = await Inbox.create({userId:shippedOrder.userId,title:"Order Shipped ", description:"Order Shipped Successfully",body:`${user.first_name}, Your Order width id ${orderId} that was Placed on ${date}, Have Been Shipped, You Would Receive More information about Your Order Status on the Open Orders Page, Feel Comfortable and Shop Our Website, Add Your Favorite Items to Cart So You Don't Loose Sight of Them, If any Trouble You Can Reach Out to Us Using the Support Chat, Thanks`})

        await inbox.save()

            response.status(200).json({status:"Success", message:"Order Updated Sucessfully"})
            return
        }

        if (action === "delivered") {
            
            const order = await Order.findByIdAndUpdate(orderId,{orderStatus: "Delivered", closed: true})
            await order.save()

             const shippedOrder = await Order.findById(orderId)
          


            const user = await User.findById(shippedOrder.userId)

            const date = new Date(shippedOrder.createdAt).toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

            const date2 = new Date().toLocaleDateString(undefined,{weekday:"short", month:"short",day:"numeric", year:"numeric"})

        const inbox = await Inbox.create({userId:shippedOrder.userId,title:"Order Delivered ", description:"Order Delivered Successfully",body:`${user.first_name}, Your Order width id ${orderId} that was Placed on ${date}, Have Been Delivered SucessFully on ${date2}, Feel Comfortable and Shop Our Website, Add Your Favorite Items to Cart So You Don't Loose Sight of Them, If any Trouble You Can Reach Out to Us Using the Support Chat, Thanks`})

        await inbox.save()



            response.status(200).json({status:"Success", message:"Order Updated Sucessfully"})
            return
        }

        response.status(404).json({status:"error", message:"Action Not Recognized"})

    } catch (error) {
        
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }
}

const deleteOrder = async (request, response) => {
    const orderId = request.params.id

    try{

        await Order.findByIdAndDelete(orderId)
        
        response.status(200).json({status:"Success", message:"Order Deleted Successfully"})

    } catch (error) {
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}


module.exports = {newOrder, getOrders, getSingleOrder, updateOrderStatus, getAllOrders,adminOrderStatus, deleteOrder}