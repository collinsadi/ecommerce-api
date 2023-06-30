
const userRoute = require('../documentations/Users.doc')
const productRoute = require('../documentations/Products.doc')
const cartRoute = require('../documentations/Carts.doc')


const swaggerDocumentations = {

    openapi: "3.0.0",
    info: {

        title : "E Commerce",
        version: "0.0.1"
    },
    components: {
        // authAction: {
        //     Basic: {
        //       name: "user1",
        //       schema: {
        //         type:"application/json",
        //         in: "header",
        //         name: "Authorization",
        //       },
        //       value: "Basic bG9naW46cGFzc3dvcmQ="
        //     }
        //   },
        },
    servers: [

        {
            url: "http://localhost:4000",
            description: "Local Server"
        },
        // {
        //     url: "https://gimbamini5.onrender.com",
        //     description: "Production Server"
        // }


    ],
    tags: [

      {  
        name: "User",
        description: "Users Routes"
    },
      {  
        name: "Product",
        description: "Products Routes"
    }
    ,
      {  
        name: "Cart",
        description: "Carts Routes"
    }


    ],
    paths: {

        ...userRoute,
        ...productRoute,
        ...cartRoute
        
    }

};




module.exports = swaggerDocumentations