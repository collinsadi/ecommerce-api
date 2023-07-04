const express = require("express")
const router = express.Router()

const {newReview, getProductReviews,getUserReviews} = require("../controllers/reviewController")
const {checkLogin} = require("../controllers/userControllers")
router.post("/new_review",checkLogin,newReview)
router.get("/get_product_reviews/:id",getProductReviews)
router.get("/get_user_reviews",checkLogin,getUserReviews)


module.exports = router