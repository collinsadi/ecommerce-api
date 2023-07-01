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
    }


}, {timestamps: true})


const Order = mongoose.model("order",orderSchema)

module.exports = Order