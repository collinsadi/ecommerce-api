

const newReview = {

    
      tags:["Reviews"],
      summary: "new product review",
    description: "Api Endpoint for adding new reviews to a product",
     requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        productId: {
                            type: "string",
                            description: "id of the Product to add Review to",
                            required: true,
                            example: "649edd4f2be4f4dd5888bb5b"
                        },
                        title: {
                            type: "string",
                            description: "title of the review",
                            required: true,
                            example: "Impressive"
                        },
                        description: {
                            type: "string",
                            description: "detailed Description of the review",
                            required: true,
                            example: "Exactly What I ordered, I am Really Impressed"
                        },
                        star: {
                            type: "number",
                            description: "Number of Stars You are Giving to the Product",
                            required: true,
                            example: 5
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
                    description: "id of the Person Making the Review",
                    type:"String",
                    example: "649edcf22be4f4dd5888bb55"
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
                                "message": "Review Added Sucessfully"
                                
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

const getProductReviews = {

    
      tags:["Reviews"],
      summary: "get product reviews",
    description: "Api Endpoint for getting all Review Analytics for a Particular Product",
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the Product to get Reviews",
                    type:"String",
                    example: "649edd4f2be4f4dd5888bb5b"
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
                                    message: "Product Not Found"
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


const getUserReviews = {

    
      tags:["Reviews"],
      summary: "get all time user reviews",
    description: "Api Endpoint for getting all Review Made by a Particular User on Different Products",
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the User to get Reviews",
                    type:"String",
                    example: "649edcf22be4f4dd5888bb55"
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
                                    message: "User Not Found"
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



const reviewRoute = {

    "/api/new_review/{id}": {

        post: newReview
},
    "/api/get_product_reviews/{id}": {

        get: getProductReviews
},
    "/api/get_user_reviews/{id}": {

        get: getUserReviews
},
}



module.exports = reviewRoute