const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

            userId: {
               type: mongoose.Schema.Types.ObjectId,
                ref: "user"
            },
            productId: {
               type: mongoose.Schema.Types.ObjectId,
                ref: "product"
            },
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            star: {
                type: Number,
                required: true
            }


}, {timestamps: true})


const Reviews = mongoose.model("review",reviewSchema)

module.exports = Reviews