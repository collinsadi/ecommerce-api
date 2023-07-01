
const addToCart = {

    tags: ["Cart"],
    summary:"add Product to Cart",
    description: "Api Endpoint for adding a Product to Cart if Product is Found in Cart it Increases the Quantity",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        productId: {
                            type: "string",
                            description: "Product Unique Identifier",
                            required: true,
                        },
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
                    description: "id of the User Who Owns the Cart",
                    type:"String",
                    example: "649dafa0db6f5f73ded2321b"
                }
            ],
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            status:"success",
                            message: "Item Added to Cart Successfully"
                        }
                    }
                }
            }
        },
        401:{
            description: "Required Field Missing",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            status: "error",
                            message: "Unable to add Item to Cart"
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
    }
}
const getCart = {

    tags: ["Cart"],
    summary:"get User Cart",
    description: "Api Endpoint for getting all cart Items for a Particular User",
 
      parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the User Who Owns the Cart",
                    type:"String",
                    example: "649dafa0db6f5f73ded2321b"
                }
            ],
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            "status": "Success",
                            "cartItems": [{
                                
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
    }
const getCartLength = {

    tags: ["Cart"],
    summary:"get User Cart Quantity",
    description: "Api Endpoint for the total Number of Items in a Cart",
      parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the User Who Owns the Cart",
                    type:"String",
                    example: "649dafa0db6f5f73ded2321b"
                }
            ],
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            "status": "Success",
                            "cartLength":4
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
const changeCartQuantity = {

    tags: ["Cart"],
    summary:"change Product Quantity",
    description: "Api Endpoint for Changing the Quantity of a Particular Product in a User's Cart",
      requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        action: {
                            type: "string",
                            description: "takes either decrease or increase (in lowercase)",
                            required: true,
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
                    description: "id of Cart",
                    type:"String",
                    example: "649e5f13d1bd0ff043b05770"
                }
            ],
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "Can Item Increased"
                    },
               
      
    
}
                    }
                }
        },
        401:{
            description: "Invalid Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Invalid Action"
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
const deleteCart = {

    tags: ["Cart"],
    summary:"delete product from cart",
    description: "Api Endpoint for Deleting a Particular Product from the Cart",
      requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        cartid: {
                            type: "string",
                            description: "the id of the product to delete",
                            required: true,
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
                    description: "id of the Owner of the Cart",
                    type:"String",
                    example: "649e5f13d1bd0ff043b05770"
                }
            ],
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                        "status": "Success",
                        "message": "Item Deleted From Cart"
                    },
               
      
    
}
                    }
                }
        },
        401:{
            description: "unauthorized",
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
                            message: "Cart Not Found"
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

const cartRoute ={

    "/api/add_to_cart/{id}": {

        post: addToCart
},
    "/api/get_cart/{id}": {

        get: getCart
},
    "/api/get_cart_length/{id}": {

        get: getCartLength
},
    "/api/change_cart_product_quantity/{id}": {

        post: changeCartQuantity
},
    "/api/delete_cart_item/{id}": {

        delete: deleteCart
},
   


}


module.exports = cartRoute