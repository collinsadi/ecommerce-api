const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({

    first_name:{

        required: true,
        type: String,
    

    },  
    second_name: {
        
        required: true,
        type: String
    },
    email: {

        required: true,
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
        
    },
    phone_number: {

        type: Number,
        required: true
        
    },
    address_line1: {
        type: String,

    },
    address_line2: {
        type: String,

    },
    nearest_bus_Stop: {
        type: String
    },
    state: {
        type: String
    }
    ,
    receive_whatsapp_info: {
        
        type: Boolean,

    },
    blocked: {
        
        type: Boolean,
        default: false
    }





}, {timestamps: true})


const User = mongoose.model('user', userSchema)

module.exports = User