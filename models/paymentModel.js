const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const paymentSchema = new Schema({

     userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"order"
    },
    paymentStatus: {
        type: String,
    },
    refrence: {
        type:String
    }


}, {timestamps: true})


const Payment = mongoose.model("payment",paymentSchema)

module.exports = Payment