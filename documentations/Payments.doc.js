
const newPayment = {

    
      tags:["Payment"],
      summary: "new Payment",
    description: "Api Endpoint for processing a payment for an order",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        orderId: {
                            type: "string",
                            description: "id of the Order that is being paid for",
                            required: true,
                            example: "64a07e72662d9b9ddf80cff2"
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
                404:{
                    description: "Not Found",
                    content: {
                        "application/json":{
                            schema: {
                                type: "object",
                                example: {
                                    message: "Required Field Missing"
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

const verifyPayment = {

    
      tags:["Payment"],
      summary: "get payment status",
    description: "Api Endpoint for getting Payment Status of an Order",
    parameters: [
                {
                    name: "reference",
                     in: "query",
                    required:true,
                    description: "payment referenece to get status",
                    type:"String",
                    example: "bjzkqi7k3k"
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
                                "status": "success"
                                
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
                                    message: "Reference Not Found"
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










const paymentRoutes = {

    "/api/pay": {
        post: newPayment
    },
    "/api/paid": {
        get: verifyPayment
    },

}

module.exports = paymentRoutes