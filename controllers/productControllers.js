const Product = require("../models/productModel")


const newProduct = async (request, response) => {

 const  {product_image1, product_image2, product_image3, product_name, product_description, product_price, product_category,product_units} = request.body
    
    try{

        if (!product_image1) {
            
            response.status(401).json({status:"error", message:"at Least One Product Image is Required"})
            return;
        }
        if (!product_name) {
            
            response.status(401).json({status:"error", message:"Product Name is Required"})
            return;
        }
        if (!product_description) {
            
            response.status(401).json({status:"error", message:"Product Description is Required"})
            return;
        }
        if (!product_price) {
            
            response.status(401).json({status:"error", message:"Product Price is Required"})
            return;
        }
        if (!product_category) {
            
            response.status(401).json({status:"error", message:"Product Category is Required"})
            return;
        }
        if (!product_units) {
            
            response.status(401).json({status:"error", message:"Product Quantity is Required"})
            return;
        }

        const newProduct = await Product.create({product_image1, product_image2, product_image3, product_name, product_description, product_price, product_category,product_units})

        await newProduct.save()

        response.status(200).json({status:"Success", message:"Product Created Sucessfully"})

    } catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})

        console.log(error)
    }


}

const allActiveProducts = async (request, response)=>{

try{

    const products = await Product.find({outOfStock: false}).sort({createdAt: -1})

    response.status(200).json({status:"sucess", products})



} catch(error){

    response.status(500).json({status:"error", message:"an Error Occured on the Server Side"})
    console.log(error)
}

}

const allProducts = async (request, response) => {
    
    try{

        const products = await Product.find().sort({createdAt: -1})

        response.status(200).json({status:"sucess", products})

    }catch(error){

        console.log(error)

        response.status(500).json({status:"error", message:"an Error Occured"})
    }
}
const getSpecificProduct = async (request, response) => {

    const productId = request.params.id
    
    try{

        if(!productId){

            response.status(401).json({status:"error", message:"Product Id is required"})
            return
        }

        const product = await Product.findById(productId)
        

        if (!product) {
            
             response.status(401).json({status:"error", message:"Product Not Found"})
            return
        }

        if (product.outOfStock) {
            
             response.status(401).json({status:"error", message:"Product Is Out Of Stock"})
            return
        }

         response.status(200).json({status:"Sucess", product})

    }catch(error){

        console.log(error)

        response.status(500).json({status:"error", message:"an Error Occured"})
    }
}

const editProduct = async (request, response) => {

    const productId = request.params.id
    const  {product_image1, product_image2, product_image3, product_name, product_description, product_price, product_category,product_units} = request.body

    try {

        const productExists = await Product.findById(productId)

        if (!productExists) {
            
            response.status(401).json({status:"error", message:"Product Not Found"})
            return
        }


         if (!product_image1) {
            
            response.status(401).json({status:"error", message:"at Least One Product Image is Required"})
            return;
        }
        if (!product_name) {
            
            response.status(401).json({status:"error", message:"Product Name is Required"})
            return;
        }
        if (!product_description) {
            
            response.status(401).json({status:"error", message:"Product Description is Required"})
            return;
        }
        if (!product_price) {
            
            response.status(401).json({status:"error", message:"Product Price is Required"})
            return;
        }
        if (!product_category) {
            
            response.status(401).json({status:"error", message:"Product Category is Required"})
            return;
        }
        


        const product = await Product.findByIdAndUpdate(productId, request.body)
        
        if (product_units === 0) {
            
            product.outOfStock = true
        }
        await product.save()

        response.status(200).json({status:"success", message: "Product Updated Sucessfully"})


    } catch (error) {
        
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}

const deleteProduct = async (request, response) => {

    const productId = request.params.id


    try{

        const productExists = await Product.findById(productId)

        if(!productExists){

            response.status(401).json({status:"error", message:"Product Not Found"})
            return
        }

        await Product.findByIdAndDelete(productId)

        response.status(200).json({status:"Success", message:"Product Deleted SucessFully"})

    } catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}



module.exports = {newProduct, allActiveProducts, allProducts,getSpecificProduct,editProduct, deleteProduct}