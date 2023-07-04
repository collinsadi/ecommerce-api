const Product = require("../models/productModel")
const User = require("../models/userModel")
const Reviews = require("../models/reviewModel")


const newReview = async (request, response) => {

    // const userId = request.params.id
    const userId = request.userid

    const { productId, title, description, star } = request.body
    
    try {


            const user = User.findById(userId)

        if (!user) {
                return response.status(404).json({status:"error", message:"User Not Found"})
            }



        if (!productId) {
            
            return response.status(404).json({status:"error", message:"Product Id Is Required"})
        }
        if (!title) {
            
         return response.status(404).json({status:"error", message:"Review Title Is Required"})
        }
        if (!description) {
            
         return response.status(404).json({status:"error", message:"Review Description Is Required"})
        }
        if (!star) {
            
         return response.status(404).json({status:"error", message:"Star Rating Is Required"})
        }

        const reviews = {productId,userId,title,description,star}
        
        const productToRate = await Reviews.create(reviews)

        await productToRate.save()
            
            // await Product.findByIdAndUpdate(productId, { $push: { rating: reviews } }, { new: true })
            // .populate("rating.userId", "-password")
        
        response.status(200).json({status:"Success", message:"Review Added Successfully"})

    }catch(error){
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}

const getProductReviews = async (request, response) => { 

    const productId = request.params.id

    try{

        const reviews = await Reviews.find({productId}).sort({createdAt: -1}).populate("userId", "first_name second_name -_id")

        if (!reviews) {
            response.status(404).json({status:"error", message:"Product Reviews Not Found"})
            return
        }

        const reviewscount = reviews.length
        const totalFiveStar = reviews.filter(star => star.star === 5).length
       const totalFourStar = reviews.filter(star => star.star === 4 ).length
        const totalThreeStar = reviews.filter(star => star.star === 3).length
        const totalTwoStar = reviews.filter(star => star.star === 2).length
        const totalOneStar = reviews.filter(star => star.star === 1).length

        console.log(reviews,reviewscount, totalFiveStar, totalFourStar,totalThreeStar, totalTwoStar, totalOneStar)

        response.status(200).json({status:"Succcess",reviews,reviewscount, totalFiveStar, totalFourStar,totalThreeStar, totalTwoStar, totalOneStar})

    } catch (error) {
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}
 
const getUserReviews = async (request, response) => {
    
   // const userId = request.params.id
    const userId = request.userid


    try{

        const user = await User.findById(userId)

        if (!user) {
            return response.status(404).json({status:"error", message:"User Not Found"})
        }

       const reviews = await Reviews.find({userId}).sort({createdAt:-1}).populate("productId","product_image1")

        response.status(200).json({status:"Success",reviews})
        

    }catch(error){
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }


}



module.exports = {newReview, getProductReviews, getUserReviews}