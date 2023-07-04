const Order = require("../models/orderModel")
const User = require("../models/userModel")
const Payment = require("../models/paymentModel")
const shortid = require("shortid")
const Inbox = require("../models/inboxModel")

const newPayment = async (request, response) => {
    
const {userId,orderId} = request.body

    try{

    const order = await Order.findById(orderId)

        if (!order) {
        return response.status(404).json({status:"error", message:"Order Not Found"})
    }
        
    let amount = 0;
    const products = order.products

    for (let i = 0; i < products.length; i++){
        amount += parseInt(products[i].productPrice) * 100
    }
   
    const user = await User.findById(userId)

    if (!user) {
        
        return response.status(401).json({status:"error", message:"User Not Found"})
    }

    const email = user.email
    const refrence = "Order" + shortid.generate()

    const payment = await Payment.create({userId,orderId,paymentStatus:"Pending", refrence: refrence.toUpperCase() })

 // PayStack Configurations

    await payment.save()

    try{

const payStackSecretKey = "sk_test_ccca287216a6486467e4e78d3e62168b952bf601"
const url = "https://api.paystack.co/transaction/initialize"
        
        const res = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${payStackSecretKey}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                amount: amount,
                email,
                callback_url: `http://localhost:4000/api/paid`,
                metadata: {
                    reference: refrence.toUpperCase(),
                }

            })
        })
        
        const data = await res.json()
        console.log(data)

        payment.refrence = data.data.reference
        await payment.save()


        if (data.status) {
        response.status(200).json({status:"Success", paymentUrl:data.data.authorization_url})
        return;
        }

       
    }catch(error){

        console.log("Paystack error", error)
    }

        



    } catch (error) {
        
        console.log(error)
    }


   


    
}

const paymentStatus = async (request, response) => {
    
    const refrence = request.query.reference

    try{

        const url = "https://api.paystack.co/transaction/verify/"+refrence

        const payStackSecretKey = "sk_test_ccca287216a6486467e4e78d3e62168b952bf601"

    const res = await fetch(url,{
        method:"get",
        headers: {
            Authorization: `Bearer ${payStackSecretKey}`,
            "Content-Type":"application/json"
        }
    })

        const data = await res.json()
        console.log(data)

        if (data.data.status === "success") {

            const date = new Date(data.data.paid_at)
            
            const payment = await Payment.findOne({ refrence })
            payment.paymentStatus = "successful"
            await payment.save()

            const user = await User.findById(payment.userId)

            const notification = await Inbox.create({
                userId:user._id,
                title: "Payment Sucessful",
                description: `Payment for Order ${payment.orderId}, Was Sucessful`,
                body:`${user.first_name}, You Payment Of ${data.data.amount/10} Naira on ${date.toLocaleDateString(undefined,{weekday:"short",month:"short",day:"numeric",year:"numeric"})} , Was Sucessful thank Your For Shopping With Us`

                
            })

            await notification.save()

            response.status(200).json({status:"success", message:"Payment Successful"})

            return
        }

        response.status(422).json({status:"error",message:"Payment not confirmed"})

    }catch(error){
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}







module.exports = {newPayment, paymentStatus}