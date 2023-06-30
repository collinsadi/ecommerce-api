
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


// const changePassword = {
//     tags:["User"],
//     description: "Api Endpoint to allow Users to Change PassWord",
//     requestBody:{
//         content: {
//             "application/json":{
//                 schema:{
//                     type: "object",
//                     properties: {

//                         oldPassword: {
//                             type: "string",
//                             description:"user's previous password"
//                         },
//                         password: {
//                             type: "string",
//                             description: "new password"

//                         }

//                     }
//                 }
//             }
//         }
//     },
//     parameters: [
//                 {
//                     name: "id",
//                     in: "path",
//                     description: "id of user",
//                     type:"String",
//                     example: "546545454548784788"
//                 }
//             ],
//             responses:{
//                 201:{
//                     description: "password change sucessful",
//                     content: {
//                         "application/json":{
//                             schema: {
//                                 type: "object",
//                                 example: {
//                                     details: "Password Updated Sucessfully"
//                                 }
//                             }
//                         }
//                     }
//                 },
//                 401:{
//                     description: "password change was not succesful",
//                     content: {
//                         "application/json":{
//                             schema: {
//                                 type: "object",
//                                 example: {
//                                     details: "Invalid Credentials"
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }

// }












const userRoute = {

    
    "/api/create_user":  {

        post: createUsers,
    },
    "/api/get_user": {
        post: logUsersIn,
    }


}

module.exports = userRoute