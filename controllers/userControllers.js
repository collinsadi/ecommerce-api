const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
require('dotenv').config()
const uuid = require("uuid")
const {sendMail} = require("./emailControllers")

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



const forgotPassword = async (request, response) => {
    
    const email = request.body.email

    try{

        const user = await User.findOne({ email })
        
        if(!user){

            response.status(404).json({status:'error', message:"Invalid Email"})
            return
        }

        const token = uuid.v4()
        
        user.passwordReset = token

        await user.save()

        

            // Email Template

        const template = ` <div style="width: 100%; margin: 0; background-color: blueviolet;color: white;padding: 15px;box-sizing: border-box;">

        <h1 style="text-align: center;font-family: Verdana, Geneva, Tahoma, sans-serif;font-weight: bold;">Password Reset</h1>
       
</div>

<div style="width: 100%;background-color: white;color: black; font-weight: bold;margin: 0;padding: 15px;font-family: Verdana, Geneva, Tahoma, sans-serif;font-size: 20px; box-sizing: border-box;text-align: center;">

     <p>${user.first_name +" "+ user.second_name}, you Requested for a Password Reset, if this request was not made by you, Please Ignore this Message, If you Made this request Please Click The Button below to reset your password </p>
            
     or you can copy this link <a href="http://localhost:4000/api/reset?token=${token}">http://localhost:4000/api/reset?token=${token}&&email=${user.email}</a>
            
             <br>

            <button style="margin-top: 50px;padding: 10px;border: 0;outline: 0;color: white;background-color: blueviolet;width: 300px; max-width: 100%;"><a href="http://localhost:4000/api/reset?token=${token}" style="text-decoration: none; color: white;font-weight: bold;" >Reset Password</a></button>


</div>
`



        sendMail(user.email,template,"Password Reset Token")


        response.status(200).json({status:"Success", message:"Password Reset Token Sent"})



    }catch(error){

        response.status(500).json({ status: "error", message: "an Error Occured" })
        console.log(error)
    }

}


const resetPassword = async (request, response) => {

    const { email, token, newPassword } = request.body
    

    try{


        const user = await User.findOne({ email })
        
        if(!user){
            response.status(401).json({status:"error", message:"Unauhorized"})
            return
        }

        if(token !== user.passwordReset  || token === ""){
            response.status(401).json({status:"error", message:"Invalid Token"})
            return
        }

        
        
        const hashedPassword = await bcrypt.hash(newPassword, 10)

        user.passwordReset = ""
        user.password = hashedPassword

        await user.save()

        response.status(200).json({status:"Sucess", message:"Password Reset Succesful"})
    }catch(error){

        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}


module.exports = {registerUser, loginUser, checkLogin,resetPassword,forgotPassword}