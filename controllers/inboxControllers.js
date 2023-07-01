const Inbox = require("../models/inboxModel")

const getInbox = async (request, response) => {

    const userId = request.params.id

    try{

        const messages = await Inbox.find({userId: userId})


        if (!messages) {
            
            response.status(404).json({status:"error", message:"Messages Not Found"})
            return
        }

        response.status(200).json({status:"Success", messages})
    } catch (error) {
        
        response.status(500).json({status:"error", message: "an Error Occured"})
        console.log(error)
    }

}


const getSingleMessage = async (request, response) => {
    
    const userId = request.params.id
    const messageId = request.body.id

    try {
        const message = await Inbox.findById(messageId)

        if (!message) {
            response.status(404).json({status:"error", message:"Could Not Find Message"})
            return
        }

        if (message.userId !== userId) {
            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }

        response.status(200).json({status:"success", message})


    }catch(error){
        response.status(500).json({status:"Error", message:"an Error Occured"})
        console.log(error)
    }
    


}

const deleteMessage = async (request, response) => {
    const userId = request.params.id
    const messageId = request.body.id

    try{
        const message = await Inbox.findById(messageId)

        if (!message) {
            response.status(404).json({status:"error", message:"Message Not Found"})
            return
        }

        if(message.userId !== userId){
            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }

        await Inbox.findByIdAndDelete(messageId)
        response.status(200).json({status:"Success", message:"Message Deleted Successfully"})


    } catch (error) {
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }
}

const changeSeenStatus = async (request, response) => {
    const userId = request.params.id
    const messageId = request.body.id

    try {
        
     const message = await Inbox.findById(messageId)

        if (!message) {
            response.status(404).json({status:"error", message:"Message Not Found"})
            return
        }

        if(message.userId !== userId){
            response.status(401).json({status:"error", message:"Unauthorized Request"})
            return
        }

        message.seen = true
        await message.save()

        response.status(200).json({status:"Success", message:"Message Seen"})

    } catch(error){
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }

}

const markAllAsRead = async (request, response) => {
    const userId = request.params.id
    

    try{

        const messages = await Inbox.updateMany({userId},{seen: true}, {multi:true})

        const itemsLength = messages.modifiedCount

        response.status(200).json({status:"Success", message: itemsLength+" Messages Have Been Marked as Read"})

    } catch (error) {
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }
}

const deleteAllmessages = async (request, response) => {
    
    const userId = request.params.id

    try{

        const messages = await Inbox.deleteMany({userId})

        const deleted = messages.deletedCount

        if (deleted === 0) {
            response.status(404).json({status:"error", message:"No Message to Delete"})
            return
        }

        response.status(200).json({status:"Success", message:deleted+" Messages Were deleted"})

    } catch (error) {
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
     }
    

}

const unreadMessageCount = async (request, response) => {
    const userId = request.params.id

    try{

        const unreadMessages = await Inbox.find({userId,seen:false})

        if (!unreadMessages) {
            response.status(404).json({status:"error", message:"Messages Not Found"})
            return
        }

        const numberofUMessages = unreadMessages.length

        response.status(200).json({status:"Success",count:numberofUMessages})

    }catch(error){
        response.status(500).json({status:"error", message:"an Error Occured"})
        console.log(error)
    }
}



module.exports = {getInbox, getSingleMessage, deleteMessage,changeSeenStatus, markAllAsRead, deleteAllmessages, unreadMessageCount}