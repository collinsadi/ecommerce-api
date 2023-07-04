
const getInbox = {

    tags: ["Inbox"],
    summary:"Get User Messages",
    description: "Api Endpoint for Getting all Messages for a Particular User",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "messages": {
                                "_id": {
                                    "$oid": "64a00eeae05f94d0c513dae5"
                                },
                                "userId": "649edcf22be4f4dd5888bb55",
                                "title": "New Order Placed",
                                "description": "Order Placed Successfuully",
                                "body": "string, You Placed a New Order today Sat, Jul 1, 2023,Please Go to the Orders Page and Confirm the Order By adding the Required Informations for the Order or Cancel the Order, Thanks",
                                "createdAt": {
                                    "$date": "2023-07-01T11:32:58.246Z"
                                },
                                "updatedAt": {
                                    "$date": "2023-07-01T11:32:58.246Z"
                                },
                                "__v": 0
                                }
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }

const getSingleMessage = {

    tags: ["Inbox"],
    summary:"Get Single Message",
    description: "Api Endpoint for Getting a Single Message by Id",
        requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        id: {
                            type: "string",
                            description: "id of the message",
                            required: true,
                            example: "649fd5d25600d87baf76ebdc"
                        }
                    }
                }
            }
        }

    },
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "messages": {
                                "_id": {
                                    "$oid": "64a00eeae05f94d0c513dae5"
                                },
                                "userId": "649edcf22be4f4dd5888bb55",
                                "title": "New Order Placed",
                                "description": "Order Placed Successfuully",
                                "body": "string, You Placed a New Order today Sat, Jul 1, 2023,Please Go to the Orders Page and Confirm the Order By adding the Required Informations for the Order or Cancel the Order, Thanks",
                                "createdAt": {
                                    "$date": "2023-07-01T11:32:58.246Z"
                                },
                                "updatedAt": {
                                    "$date": "2023-07-01T11:32:58.246Z"
                                },
                                "__v": 0
                                }
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        401:{
            description: "Unauthorized",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Unauthorized Requests"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }


const deleteMessage = {

    tags: ["Inbox"],
    summary:"Delete Single Message",
    description: "Api Endpoint for Deleting a Single Message by Id",
    requestBody: {

        content: {
            "Application/Json": {
                schema: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            description: "id of the message",
                            required: true,
                            example: "649fd5d25600d87baf76ebdc"
                        }
                    }
                }
            }
        },
    },
    
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "Message Successfully Deleted"
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        401:{
            description: "Unauthorized",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Unauthorized Requests"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }

const changeSeenStatus = {

    tags: ["Inbox"],
    summary:"Seen Message",
    description: "Api Endpoint for Changing a Message Status to Seen",
        requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        id: {
                            type: "string",
                            description: "id of the message",
                            required: true,
                            example: "649fd5d25600d87baf76ebdc"
                        }
                    }
                }
            }
        }

    },
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "Message Seen"
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        401:{
            description: "Unauthorized",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Unauthorized Requests"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }


const markAllAsRead = {

    tags: ["Inbox"],
    summary:"mark all as read",
    description: "Api Endpoint for Making all messages for a user as read",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "All Messages Marked as Read"
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }


const deleteAllmessages = {

    tags: ["Inbox"],
    summary:"delete all messages",
    description: "Api Endpoint for Deleting all Messages for a user",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "All Messages Deleted"
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }


const unreadMessageCount = {

    tags: ["Inbox"],
    summary:"unread Messages Count",
    description: "Api Endpoint for Getting the total Numbe of Unread Messages for a Particular User",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "count": "3"
                    },
               
      
    
}
                    }
                }
        },
        404:{
            description: "Not Found",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Message Not Found"
                        }
                    }
                }
            }
        },
        500:{
            description: "Server Side Error",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "an Error Occured on the Server Side"
                        }
                    }
                }
            }
        }
        },
        
        
    }



const inboxRoute = {

    "/api/user_inbox": {

        get: getInbox
},
    "/api/inbox": {

        post: getSingleMessage
},
    "/api/message_seen_status": {

        post: changeSeenStatus
},
    "/api/mark_all_inboxes_as_read": {

        post: markAllAsRead
},

    "/api/delete_all_messages": {

        post: deleteAllmessages
},

    "/api/get_unread_messages_count": {

       get: unreadMessageCount
},
    "/api/delete_message": {

        delete: deleteMessage
},


}





module.exports = inboxRoute