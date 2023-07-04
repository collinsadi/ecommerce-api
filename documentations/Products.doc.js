
const createProduct = {

    tags: ["Product"],
    summary:"Create New Product",
    description: "Api Endpoint for Creating New Product ",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        product_image1: {
                            type: "string",
                            description: "Product Cover Image",
                            required: true,
                        },
                        product_image2: {
                            type: "string",
                            description: "Product Image 2"
                        },
                        product_image3: {
                            type: "string",
                            description: "Product Image 3"
                        },
                        product_description: {
                            type: "string",
                            description: "Product Description",
                            required: true,
                        },
                        product_name: {
                            type: "string",
                            description: "Product Name",
                            required: true,
                        },
                        product_price: {
                            type: "string",
                            description: "Product Price",
                            required: true,
                        },
                        product_category: {
                            type: "string",
                            description: "Product Category",
                            required: true,
                        },
                        product_units: {
                            type: "number",
                            description: "Product Quantity",
                            required: true,
                        },
                        
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
                            status:"success",
                            message: "Product Created Sucessfully"
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
                            message: "Unable to Create Product"
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
const getActiiveProducts = {

    tags: ["Product"],
    summary:"get all Products that are in Stock",
    description: "Api Endpoint for Getting Products that are not marked as Out of Stock ",
   
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            status: "sucess",
                            products: [
                                {
                                    "_id": "649e30c3cf847d3d4eb6ebba",
                                    "product_image1": "vhvhvhvh",
                                    "product_name": "hvhvhvhv",
                                    "product_description": "uvvjvjv",
                                    "product_price": "vhvhvhvhv",
                                    "product_category": "jgjgjgjgjjgj",
                                    "product_units": 444,
                                    "outOfStock": false,
                                    "rating": [],
                                    "createdAt": "2023-06-30T01:32:51.457Z",
                                    "updatedAt": "2023-06-30T01:32:51.457Z",
                                    "__v": 0
                                }
                            ]
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
const getAllProducts = {

    tags: ["Product"],
    summary:"get all Products",
    description: "Api Endpoint for Getting Products even Out Of Stock Products ",
   
    responses: {
        200:{
            description: "Sucessful Action",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            status: "sucess",
                            products: [
                                {
                                    "_id": "649e30c3cf847d3d4eb6ebba",
                                    "product_image1": "vhvhvhvh",
                                    "product_name": "hvhvhvhv",
                                    "product_description": "uvvjvjv",
                                    "product_price": "vhvhvhvhv",
                                    "product_category": "jgjgjgjgjjgj",
                                    "product_units": 444,
                                    "outOfStock": false,
                                    "rating": [],
                                    "createdAt": "2023-06-30T01:32:51.457Z",
                                    "updatedAt": "2023-06-30T01:32:51.457Z",
                                    "__v": 0
                                }
                            ]
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
const getSpecificProduct = {

    
      tags:["Product"],
      summary: "get Single Product",
    description: "Api Endpoint to get a Product By Its Unique Identifier",
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the product",
                    type:"String",
                    example: "649e30c3cf847d3d4eb6ebba"
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
                                "status": "sucess",
                                "products": [
                                    {
                                        "_id": "649e30c3cf847d3d4eb6ebba",
                                        "product_image1": "vhvhvhvh",
                                        "product_name": "hvhvhvhv",
                                        "product_description": "uvvjvjv",
                                        "product_price": "vhvhvhvhv",
                                        "product_category": "jgjgjgjgjjgj",
                                        "product_units": 444,
                                        "outOfStock": false,
                                        "rating": [],
                                        "createdAt": "2023-06-30T01:32:51.457Z",
                                        "updatedAt": "2023-06-30T01:32:51.457Z",
                                        "__v": 0
                                    }
                                ]
                            }
                            }
                        }
                    }
                },
                401:{
                    description: "Error",
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
const editProduct = {

    tags: ["Product"],
    summary:"Edit a Product",
    description: "Api Endpoint for Editing a Specific Product ",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        product_image1: {
                            type: "string",
                            description: "Product Cover Image",
                            required: true,
                        },
                        product_image2: {
                            type: "string",
                            description: "Product Image 2"
                        },
                        product_image3: {
                            type: "string",
                            description: "Product Image 3"
                        },
                        product_description: {
                            type: "string",
                            description: "Product Description",
                            required: true,
                        },
                        product_name: {
                            type: "string",
                            description: "Product Name",
                            required: true,
                        },
                        product_price: {
                            type: "string",
                            description: "Product Price",
                            required: true,
                        },
                        product_category: {
                            type: "string",
                            description: "Product Category",
                            required: true,
                        },
                        product_units: {
                            type: "number",
                            description: "Product Quantity",
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
                    description: "id of the product",
                    type:"String",
                    example: "649e30c3cf847d3d4eb6ebba"
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
                            message: "Product Updated Sucessfully"
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
                            message: "Product Not Found"
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

const deleteProduct = {

    
      tags:["Product"],
      summary: "delete Single Product",
    description: "Api Endpoint to delete a Product",
    parameters: [
                {
                    name: "id",
                     in: "path",
                    required:true,
                    description: "id of the product",
                    type:"String",
                    example: "649e30c3cf847d3d4eb6ebba"
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
                                    status: "Success",
                                    message: "Product Deleted Sucessfully"
                                }
                            }
                        }
                    }
                },
                401:{
                    description: "Error",
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

const searchProducts = {

    
      tags:["Search"],
      summary: "Search Product",
    description: "Api Endpoint to Search Products through Categories, Names, and Product Descriptions",
    parameters: [
                {
                    name: "search",
                     in: "query",
                    required:true,
                    description: "search keyword",
                    type:"String",
                    example: "String"
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
                                    status: "Success",
                                }
                            }
                        }
                    }
                }
            }



}

const getProductByUniqueUrl = {

    
      tags:["Product"],
      summary: "get Product by unique url",
    description: "Api Endpoint to get Products by the Uniqe Url that have been created for them",
    parameters: [
                {
                    name: "url",
                     in: "path",
                    required:true,
                    description: "Product Unique Url Key",
                    type:"String",
                    example: "red-mini-skirt-for-adults-and-teens-8mLK2CksS"
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
                                    status: "Success",
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
                                    status: "error",
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
                                    status: "error",
                                }
                            }
                        }
                    }
                },
            }



}


const productRoute = {

     "/api/create_product":  {

        post: createProduct
    },
     "/api/get_active_products":  {

         get: getActiiveProducts
    },
     "/api/get_all_products":  {

         get: getAllProducts
    },
     "/api/get_product/{id}":  {

         get: getSpecificProduct
    },
     "/api/edit_product/{id}":  {

         put: editProduct
    }, "/api/product/{url}":  {

         get: getProductByUniqueUrl
    },
     "/api/delete_product/{id}":  {

         delete: deleteProduct
    },
     "/api/search":  {

         get: searchProducts
    },
    
}



module.exports = productRoute