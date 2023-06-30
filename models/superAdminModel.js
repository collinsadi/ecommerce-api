const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const superadminSchema = new Schema({

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
        
    }



}, {timestamps: true})


const SuperAdmin = mongoose.model('superadmin', superadminSchema)

module.exports = SuperAdmin