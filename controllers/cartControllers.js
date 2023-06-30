const Cart = require("../models/cartModel")
const User = require("../models/userModel")

const addToCart = async (request, response) => {

    const userId = request.params.id

    const {productId,productImage,productName, productPrice} = request.body

    try {

        const cartOwner = await User.findById(userId)

        if (!cartOwner) {
            
            response.status(401).json({status:"error", message:"Incorrect Id in Parameter"})
            return
        }

        if (!productId || !productImage || !productPrice) {

            response.status(401).json({status:"error", message:"Required Field is Missing"})
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

        const newProduct = {userId,products:[{ productId, productImage, productName,productPrice, productQuantity: 1 }]}
            
        
       
        const newCart = await Cart.create(newProduct)
        await newCart.save()

        response.status(200).json({status:"Sucess", message:"Item Successfully Added To Cart"})


    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}
const getCart = async (request, response) => {
    
    const userId = request.params.id


    try {
        
        const cartItems = await Cart.find({userId}).sort({createdAt: -1})

        response.status(200).json({status:"Success", cartItems})


    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}
const getCartLength = async (request, response) => {
    
    const userId = request.params.id


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


module.exports = {addToCart, getCart, getCartLength,  changeCartQuantity}