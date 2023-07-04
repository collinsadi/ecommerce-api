
// const users = [{

//     id: 1,
//     first_name: "John"
// },
// {

//     id: 2,
//     first_name: "Doe"
// },

// ]
// const getUserByQueryId = {

//     tags: ["User"],
//     summary: "use query id",
//     description: "Get the user by id",
//     parameters: [
//         {
//             name: "id",
//             in: "query",
//             description: "id of users",
//             type:"String",
//             example: "546545454548784788"
//         }
//     ],
//     responses: {
//         200:{
//             description: "Sucessful Operation",
//             content: {
//                 "application/json": {
//                     schema: {
//                         type: "object",
//                         example: users[0]
//                     }
//                 }
//             }
//         },
//         400: {
//             description: "User not Found"
//         }
//     }
// }


// const getAllUsers =  {


//     tags: ["User"],
//     description: "list all the users",
//     responses: {
//         200:{
//             description: "Sucessful Operation",
//             content: {
//                 "application/json": {
//                     schema: {
//                         type: "object",
//                         example: {
//                             count: 1,
//                             users
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// const createUser = {
//     tags: ["User"],
//     description: "Create a User",
//     requestBody: {
//         content: {

//             "application/json" : {

//                 schema: {
//                     type: "object",
//                     properties: {
//                         name: {
//                             type: "String",
//                             description: "Name of the User",
//                             example: "David"
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     responses: {
//         200:{
//             description: "Sucessful Operation",
//             content: {
//                 "application/json": {
//                     schema: {
//                         type: "object",
//                         example: users[0]
//                     }
//                 }
//             }
//         }
//     }





// }




const createUsers = {

    tags: ["User"],
    summary:"User Sign Up",
    description: "Api Endpoint for Creating New Users",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        first_name: {
                            type: "string",
                            description: "Users First Name",
                            required: true,
                        },
                        second_name: {
                            type: "string",
                            description: "Users Second Name",
                            required: true,
                        },
                        email: {
                            type: "string",
                            description: "Users Email",
                            required: true,
                            unique: true,
                        },
                        password: {
                            type: "string",
                            description: "Users Password",
                            required: true,
                        },
                        phone_number: {
                            type: "number",
                            description: "Users Phone Number",
                            required: true,
                            unique: true,
                        }
                    }
                }
            }
        }

    },
    responses: {
        200:{
            description: "Sign Up Sucessful",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            status:"success",
                            message: "Sign Up Sucessful"
                        }
                    }
                }
            }
        },
        401:{
            description: "Email  in Use or Required Field Missing",
            content: {
                "application/json":{
                    schema: {
                        type: "object",
                        example: {
                            message: "Unable to sign Up User"
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

const logUsersIn = {
    tags: ["User"],
    summary:"User Log In",
    description: "Api Endpoint for Logging Users In",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        email: {
                            type: "string",
                            description: "User Email"
                        },
                        password: {
                            type: "string",
                            description: "user password"
                        }
                    }
                }
            }
        }

    },
    responses : {
        200:{

            description: "Sucessful Login",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"success",
                            message: "Log In Sucessful"
                        }
                    }
                }
            }
        },
        401: {
            description: "Invalid Credentials",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"error",
                            message: "Invalid Credentials"
                        }
                    }
                }
            }
        },
        401: {
            description: "Server Side Error",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                            status:"error",
                            message: "an Error Occured on the server side"
                        }
                    }
                }
            }
        }
    }

}





const forgotPassword = {
    tags: ["User"],
    summary:"Forgotten Password",
    description: "Api Endpoint for resseting Forgotten Passwords",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        email: {
                            type: "string",
                            description: "User Email"
                        }
                    }
                }
            }
        }

    },
    responses : {
        200:{

            description: "Token Sent",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"success",
                            message: "Password Reset Token Sent"
                        }
                    }
                }
            }
        },
        404: {
            description: "User not Found",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"error",
                            message: "Invalid Email"
                        }
                    }
                }
            }
        },
        500: {
            description: "Server Side Error",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                            status:"error",
                            message: "an Error Occured on the server side"
                        }
                    }
                }
            }
        }
    }

}

const resetPassword = {
    tags: ["User"],
    summary:"final password reset process",
    description: "Api Endpoint for Creating a new password for users if Token is valid",
    requestBody: {

        content: {
            "Application/Json":{
                schema:{
                    type: "object",
                    properties:{
                        email: {
                            type: "string",
                            description: "User Email"
                        },
                        newPassword: {
                            type: "string",
                            description: "New password"
                        },
                        token: {
                            type: "string",
                            description: "password reset Token"
                        },
                    }
                }
            }
        }

    },
    responses : {
        200:{

            description: "Sucessful Login",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"success",
                            message: "Password Reset Succesfull"
                        }
                    }
                }
            }
        },
        401: {
            description: "Invalid Credentials",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                             status:"error",
                            message: "Invalid Credentials"
                        }
                    }
                }
            }
        },
        500: {
            description: "Server Side Error",
            content: {
                "assplication/json": {
                    schema: {
                        type: "object",
                        example: {
                            status:"error",
                            message: "an Error Occured on the server side"
                        }
                    }
                }
            }
        }
    }

}









const userRoute = {

    
    "/api/create_user":  {

        post: createUsers,
    },
    "/api/get_user": {
        post: logUsersIn,
    },
    "/api/password/forgotten": {
        post: forgotPassword,
    },
    "/api/password/reset": {
        post: resetPassword,
    },


}

module.exports = userRoute