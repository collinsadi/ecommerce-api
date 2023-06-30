const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema({

    userId: {
        type: String
    },
    products: [
        {
            productId: String,
            productImage: String,
            productName: String,
            productPrice: Number,
            productQuantity: Number
        }
    ]


}, {timestamps: true})


const Cart = mongoose.model("cart",cartSchema)

module.exports = Cart