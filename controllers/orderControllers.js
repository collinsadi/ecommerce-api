const Order = require('../models/orderModel')
const Cart = require('../models/cartModel')



const newOrder = async(request, response)=>{

    const userId = request.params.id

    const { products } = request.body
    
    try{

        if(!products){

            response.status(404).json({status:"error", message:"No Item to Order"})
            return
        }

        if(products && products.length === 0){

            response.status(404).json({status:"error", message:"No Item to Order"})
            return
        }

        const productIds = products.map(product=> product.productId)

        const neworder = await Order.create({userId,products})
        await neworder.save()

        const cart = await Cart.deleteMany({userId,"products.productId":{$in: productIds}})

        response.status(200).json({ status: 'success', message: 'Order created successfully' });
    }catch(error){
        console.log(error)
        response.status(500).json({status:"error", message:"an Error Occured"})
    }

}







module.exports = {newOrder}