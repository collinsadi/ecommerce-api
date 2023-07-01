

const newOrder = {

    tags: ["Order"],
    summary:"Create a New Order",
    description: "Api Endpoint for Creating a New  Order",
      requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        products: {
                            type: "array",
                            description: "Array of Products to Order",
                            required: true,
                            example: [
                                    {
                                    "productId": "649f71ec6dffec9f90a076b6",
                                    "productImage": "string",
                                    "productName": "string",
                                    "productPrice": "string",
                                    "productQuantity": 2,
                                    "_id": "649f72536dffec9f90a076bf"
                                    }
                                ]
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
                    description: "id of the Person Making the The Order",
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



const orderRoute = {

     "/api/new_order/{id}": {

        post: newOrder
},
}




module.exports = orderRoute