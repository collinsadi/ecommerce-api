const express = require("express")
const router = express.Router()
const {getInbox, getSingleMessage, deleteMessage, changeSeenStatus, markAllAsRead, deleteAllmessages, unreadMessageCount} = require("../controllers/inboxControllers")

router.get("/user_inbox/:id",getInbox)
router.post("/inbox/:id",getSingleMessage)
router.delete("/delete_message/:id",deleteMessage)
router.post("/message_seen_status/:id",changeSeenStatus)
router.post("/mark_all_inboxes_as_read/:id",markAllAsRead)
router.post("/delete_all_messages/:id",deleteAllmessages)
router.get("/get_unread_messages_count/:id",unreadMessageCount)





module.exports = router