
const userRoute = require('../documentations/Users.doc')
const productRoute = require('../documentations/Products.doc')
const cartRoute = require('../documentations/Carts.doc')
const orderRoute = require('../documentations/Orders.doc')
const inboxRoute = require("../documentations/Inbox.doc")
const reviewRoute = require("../documentations/Review.doc")


const swaggerDocumentations = {

    openapi: "3.0.0",
    info: {

        title : "Hadifox",
      version: "1.0.0",
      description: "Node REST API for Hadifox Ecommerce Project, You can see the Frontend Project Here [`Hadifox`](https://collinsadi.github.io/hadifox)"
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
    ,
      {  
        name: "Order",
        description: "Order Routes"
    }
    ,
      {  
        name: "Inbox",
        description: "User Inbox"
    },
      {  
        name: "Reviews",
        description: "Product Reviews"
    },
      {  
        name: "Search",
        description: "Product Search"
    },


    ],
    paths: {

        ...userRoute,
        ...productRoute,
        ...cartRoute,
      ...orderRoute,
      ...inboxRoute,
      ...reviewRoute
        
    }

};




module.exports = swaggerDocumentations