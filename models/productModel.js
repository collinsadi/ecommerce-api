const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({

    product_image1: {
        type: String,
        required: true
    },
    product_image2: {
        type: String,
    },
    product_image3: {
        type: String,
    },
    product_name: {
        type: String,
        required: true,
        trim: true
    },
    product_description: {
        type: String,
        required: true,
        trim: true
    },
    product_price: {
        type: String,
        required: true,
        trim: true
    },
    product_category: {
        type: String,
        required: true,
        trim: true
    },
    product_units: {
        type: Number,
        required: true,
        trim: true
    },
    outOfStock: {
        
        type: Boolean,
        default:false
    },
    rating: [
        {
            userid: String,
        }
    ]


}, {timestamps: true})


const Product = mongoose.model("product",productSchema)

module.exports = Product