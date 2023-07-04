

const newOrder = {

    tags: ["Order"],
    summary:"Create a New Order",
    description: "Api Endpoint for Creating a New  Order",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "Order Created Successfully"
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
                            message: "No Item to Order"
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

const getOrders = {

    tags: ["Order"],
    summary:"get User Orders",
    description: "Api Endpoint for getting all Orders for a Particular User",
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            "status": "Success",
                            "userOrders": [{
                                
                                    "_id": "649e5f13d1bd0ff043b05770",
                                    "userId": "649dafa0db6f5f73ded2321b",
                                    "products": [
                                        {
                                            "productId": "gfhfghdfghfhhhgh ",
                                            "productImage": "hfhfhfhf",
                                            "productName": "hfhfffhfhf",
                                            "productQuantity": 4,
                                            "_id": "649e5f13d1bd0ff043b05771"
                                        }
                                    ],
                                    "createdAt": "2023-06-30T04:50:27.284Z",
                                    "updatedAt": "2023-06-30T05:10:33.245Z",
                                            "__v": 0
                                }]
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
                            "status": "Success",
                            "message": "Orders Not Found"
                    },
               
      
    
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

const getSingleOrder = {

    
      tags:["Order"],
      summary: "get Single Order",
    description: "Api Endpoint to get an Order By Its Unique Identifier",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        orderId: {
                            type: "string",
                            description: "Id of the Order to get",
                            required: true,
                            example: "649f730ac5ce4c70b596db6f"
                        }
                    }
                }
            }
        }

    },
            responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "sucess",
                                "order": {
                                                "userId": "649edcf22be4f4dd5888bb55",
                                                "products": [
                                                    {
                                                    "productId": "649f71ec6dffec9f90a076b6",
                                                    "productImage": "string",
                                                    "productName": "string",
                                                    "productPrice": "string",
                                                    "productQuantity": 2,
                                                    "_id": {
                                                        "$oid": "649f72536dffec9f90a076bf"
                                                    }
                                                    }
                                                ],
                                                "orderStatus": "Pending",
                                                "createdAt": {
                                                    "$date": "2023-07-01T00:27:55.040Z"
                                                },
                                                "updatedAt": {
                                                    "$date": "2023-07-01T00:27:55.040Z"
                                                },
                                                "__v": 0
                                        }
                                
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
                                    message: "Unauthorized Request"
                                }
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
                                    message: "Order Not Found"
                                }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}

const updateOrderStatus = {

    
      tags:["Order"],
      summary: "cancel of confirm order",
    description: "Api Endpoint to cancel or confirm an Order",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        orderId: {
                            type: "string",
                            description: "Id of the Order to get",
                            required: true,
                            example: "649f730ac5ce4c70b596db6f"
                        },
                        action: {
                            type: "string",
                            description: "confirm or cancel",
                            required: true,
                            example: "confirm"
                        },
                        shippingAddress: {
                            type: "string",
                            description: "Shipping Address of the Order",
                            required: true,
                            example: "#25 Wilson Abali, Agip Estate"
                        },
                        deliveryMethod: {
                            type: "string",
                            description: "Delivery Method",
                            required: true,
                            example: "Pay on Delivery"
                        },
                        nearestJunction: {
                            type: "string",
                            description: "Nearest Public Junction",
                            required: true,
                            example: "UST RoundAbout"
                        },
                    }
                }
            }
        }

    },
            responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "success",
                                "message": "Order Confirmed Successfully"
                                
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
                                    message: "Unauthorized Request"
                                }
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
                                    message: "Missing Field"
                                }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}

const getAllOrders = {

    
      tags:["Order"],
      summary: "get all Orders",
    description: "Api Endpoint to get all Orders for Super Admin",
         responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "sucess",
                                "orderx": {
                                                "userId": "649edcf22be4f4dd5888bb55",
                                                "products": [
                                                    {
                                                    "productId": "649f71ec6dffec9f90a076b6",
                                                    "productImage": "string",
                                                    "productName": "string",
                                                    "productPrice": "string",
                                                    "productQuantity": 2,
                                                    "_id": {
                                                        "$oid": "649f72536dffec9f90a076bf"
                                                    }
                                                    }
                                                ],
                                                "orderStatus": "Pending",
                                                "createdAt": {
                                                    "$date": "2023-07-01T00:27:55.040Z"
                                                },
                                                "updatedAt": {
                                                    "$date": "2023-07-01T00:27:55.040Z"
                                                },
                                                "__v": 0
                                        }
                                
                            }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}

const adminOrderStatus = {

    
      tags:["Order"],
      summary: "Super Admin, Delivered or Shipped Order",
    description: "Api Endpoint to mark order as shipped or delivered",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        action: {
                            type: "string",
                            description: "shipped or delivered",
                            required: true,
                            example: "shipped"
                        }
                    }
                }
            }
        }

    },
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the Order",
                    type:"String",
                    example: "649f730ac5ce4c70b596db6f"
                }
            ],
            responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "success",
                                "message": "Order Status Updated Sucessfully"
                                
                            }
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
                                    message: "Action not Recognized"
                                }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}

const deleteOrder = {

    
      tags:["Order"],
      summary: "Super Admin, Delete Order",
    description: "Api Endpoint to Delete an Order",
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the Order",
                    type:"String",
                    example: "649f730ac5ce4c70b596db6f"
                }
            ],
            responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "success",
                                "message": "Order DeletedSucessfully"
                                
                            }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}

const filterOrders = {

    
      tags:["Order"],
      summary: "Super Admin, Filter Orders",
    description: "Api Endpoint for super admin to filter and find orders",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        filter: {
                            type: "string",
                            description: "shipped or delivered or confirmed",
                            required: true,
                            example: "confirmed"
                        }
                    }
                }
            }
        }

    },
            responses:{
                200:{
                    description: "Sucessful Action",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                "status": "success",
                               
                                
                            }
                            }
                        }
                    }
                },
                422:{
                    description: "Not Found",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "Action not Recognized"
                                }
                            }
                        }
                    }
                },
                500:{
                    description: "Server Error",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "an Error Occured"
                                }
                            }
                        }
                    }
                },
            }



}



const orderRoute = {

     "/api/new_order": {

        post: newOrder
},
     "/api/get_order": {

        get: getOrders
},
     "/api/get_single_order": {

        post: getSingleOrder
},
     "/api/update_order_status": {

        post: updateOrderStatus
},
     "/api/get_all_orders": {

        get: getAllOrders
},
     "/api/order_delivery_status/{id}": {

        post: adminOrderStatus
},
     "/api/filter_orders": {

        post: filterOrders
},
     "/api/delete_order/{id}": {

        delete: deleteOrder
},
}




module.exports = orderRoute