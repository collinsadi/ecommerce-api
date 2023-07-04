const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
require('dotenv').config()


const jwtsecret = process.env.JWT_SECRET

const registerUser = async (request, response) => {
    
    const {first_name, second_name, email, password, phone_number, receive_whatsapp_info} = request.body

    try{

        if(!first_name){

            response.status(401).json({ status: "error", message: "First Name Missing" })
            return
        }
        if(!second_name){

            response.status(401).json({ status: "error", message: "Second Name Missing" })
            return
        }
        if(!email){

            response.status(401).json({ status: "error", message: "email Missing" })
            return
        }
        if(!password){

            response.status(401).json({ status: "error", message: "password Missing" })
            return
        }
        if(!phone_number){

            response.status(401).json({ status: "error", message: "Phone Number Missing" })
            return
        }

        const userExists = await User.findOne({email})

        if (userExists) {

            response.status(401).json({status:"error", message:"Email is Already in Use"})

            return
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = await User.create({first_name,second_name,email, password: hashedPassword, phone_number})

        await newUser.save()


        response.status(200).json({status:"Success", message:"Sign Up Sucessful"})

    } catch(error){

        console.log(error)

        response.status(500).json({status: "error", message: "an Error Occured, all Fields are Required"})
    }



}

const loginUser = async (request, response) => {
    
    const {email, password} = request.body

    try{

        if(!email){

            response.status(401).json({status:"error", message:"Email Required"})
            return

        }
        if(!password){

            response.status(401).json({status:"error", message:"Password Required"})
            return

        }

        if (email.indexOf("@") === -1) {
            response.status(422).json({status:"error", message:"enter a valid email"})
            return
        }

        const user = await User.findOne({ email })
        
        if (!user) {
            
            response.status(404).json({status:"error", message:"Invalid Credentials"})
            return
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){

             response.status(404).json({status:"error", message:"Invalid Credentials"})
            return

        }

        const token =  jwt.sign({user: user}, jwtsecret)

        response.cookie("token", token, { httpOnly: true })
        
        response.status(200).json({status:"success", message:"Login Sucessful"})

    } catch(error){

        console.log(error)

        res.status(500).json({status:"error", message:"an Error Occured on the Server Side"})
    }

}

const checkLogin = async (request, response, next) => {
    
    const cookie = request.cookies.token

    if (!cookie) {

        response.status(401).json({status:"error", message:"Unauthorized Request"})
        
        return
    }

    try{

        const decoded = jwt.verify(cookie, jwtsecret)
        request.userid = decoded.user._id

    console.log(decoded.user)
    next()

    } catch(error){

        response.status(401).json({status:"error", message:"a Server side Error occured"})

    }


}

module.exports = {registerUser, loginUser, checkLogin}