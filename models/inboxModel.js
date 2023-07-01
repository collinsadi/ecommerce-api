const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const inboxSchema = new Schema({

    userId: {
         
        type: String
    },
    title: {

        type:String
    },
    description: {

        type:String
    },
    body: {

        type:String
    },


}, {timestamps: true})


const Inbox = mongoose.model("inbox",inboxSchema)

module.exports = Inbox