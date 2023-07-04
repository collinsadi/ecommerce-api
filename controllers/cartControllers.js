const Cart = require("../models/cartModel")
const User = require("../models/userModel")
const Product = require("../models/productModel")

const addToCart = async (request, response) => {

    // const userId = request.params.id
    const userId = request.userid

    const {productId} = request.body

    try {

        const cartOwner = await User.findById(userId)

        if (!cartOwner) {
            
            response.status(401).json({status:"error", message:"Incorrect Id in Parameter"})
            return
        }

        if(productId.length < 12){

            response.status(401).json({status:"error", message:"Enter a Valid Product Id"})
            return
        }

        const cartExists = await Cart.find({userId, 'products.productId':productId})
        
        
        if(cartExists.length > 0){

            const cart = cartExists[0]

            const product = cart.products.find((p)=> p.productId === productId)

            if (product) {
                
                product.productQuantity += 1
            }
            

           await cart.save()

            response.status(200).json({status: "Success", message: "Product Quantity Increased"})
            return
        }

        const product = await Product.findById(productId)

        if (!product) {
            
            response.status(401).json({status:"error", message:"The Peoduct You are Adding to Cart Was Not Found"})
            return
        }

        const newProduct = {userId,products:[{ productId, productImage:product.product_image1, productName: product.product_name,productPrice: product.product_price, productQuantity: 1 }]}
            
        
       
        const newCart = await Cart.create(newProduct)
        await newCart.save()

        response.status(200).json({status:"Sucess", message:"Item Successfully Added To Cart"})


    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}
const getCart = async (request, response) => {
    
     // const userId = request.params.id
    const userId = request.userid

    try {
        
        const cartItems = await Cart.find({userId}).sort({createdAt: -1})

        response.status(200).json({status:"Success", cartItems})


    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}
const getCartLength = async (request, response) => {
    
    // const userId = request.params.id
    const userId = request.userid


    try {
        
        const cartItems = await Cart.find({userId}).sort({createdAt: -1})

        response.status(200).json({status:"Success", cartLength: cartItems.length})


    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}

const changeCartQuantity = async (request, response)=>{

    const cartId = request.params.id

    const action = request.body.action

    try {
        
        if(action === "increase"){


            try{

                const cart = await Cart.findById(cartId)

                console.log(cart.products[0].productQuantity)
                

                cart.products[0].productQuantity += 1

                await cart.save()

                response.status(200).json({status: "Success", message:"Can Item Increased"})

                return
            } catch(error){

                response.status(401).json({status:"error", message:"an Error Occured"})
                console.log(error)
            }



            return

        }
        if(action === "decrease"){


            try{

                const cart = await Cart.findById(cartId)
                
                 cart.products[0].productQuantity -= 1

                await cart.save()

                response.status(200).json({status: "Success", message:"Can Item Decreased"})

                return
            } catch(error){

                response.status(401).json({status:"error", message:"an Error Occured"})
                console.log(error)
            }



          return

        }


        response.status(401).json({status: "error", message: "Invalid Action"})



    } catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const deleteCart = async (request, response) => {
    
    // const userId = request.params.id
    const userId = request.userid
    const cartId = request.body.cartid 

    try {
    
        const cart = await Cart.findById(cartId)

        if(!cart){

            response.status(404).json({status:"error", message:"Cart Not Found"})
            return
        }

        if (cart.userId !== userId) {
            
            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }

        await Cart.findByIdAndDelete(cartId)

        response.status(200).json({status:"Success", message:"Item Deleted Froom Cart"})


    } catch (error) {
        
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}


module.exports = {addToCart, getCart, getCartLength,  changeCartQuantity, deleteCart}