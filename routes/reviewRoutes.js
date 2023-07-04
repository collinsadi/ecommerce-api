const express = require("express")
const router = express.Router()

const {newReview, getProductReviews,getUserReviews} = require("../controllers/reviewController")

router.post("/new_review/:id",newReview)
router.get("/get_product_reviews/:id",getProductReviews)
router.get("/get_user_reviews/:id",getUserReviews)


module.exports = router