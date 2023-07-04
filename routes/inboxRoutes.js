const express = require("express")
const router = express.Router()
const {getInbox, getSingleMessage, deleteMessage, changeSeenStatus, markAllAsRead, deleteAllmessages, unreadMessageCount} = require("../controllers/inboxControllers")
const {checkLogin} = require("../controllers/userControllers")
router.get("/user_inbox",checkLogin,getInbox)
router.post("/inbox",checkLogin,getSingleMessage)
router.delete("/delete_message/:id",checkLogin,deleteMessage)
router.post("/message_seen_status",checkLogin,changeSeenStatus)
router.post("/mark_all_inboxes_as_read",checkLogin,markAllAsRead)
router.post("/delete_all_messages",checkLogin,deleteAllmessages)
router.get("/get_unread_messages_count",checkLogin,unreadMessageCount)





module.exports = router