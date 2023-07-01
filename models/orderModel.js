const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({

     userId: {
        type: String
    },
    products: [
        {
            productId: String,
            productImage: String,
            productName: String,
            productPrice: String,
            productQuantity: Number
        }
    ],
    orderStatus: {
        type: String,
        default: "Pending"
    },
    closed: {
        type: Boolean,
        default: false
    },
    shippingAddress: {
        type: String
    },
    deliveryMethod: {
        type: String
    },
    nearestJunction: {
        type: String
    }


}, {timestamps: true})


const Order = mongoose.model("order",orderSchema)

module.exports = Order