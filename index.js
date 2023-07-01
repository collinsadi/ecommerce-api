const express = require('express')
const morgan = require('morgan')

// routes

const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require("./routes/cartRoutes")
const orderRoutes = require("./routes/orderRoutes")
const inboxRoutes = require("./routes/inboxRoutes")

const mongoose = require("mongoose")
const swaggerDocumentations = require('./routes/documentations')
const cookieParser = require("cookie-parser")
const swaggerDocs = require('swagger-ui-express')




const url = "mongodb://127.0.0.1:27017/ecommerce"


mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

.then(()=>{

    console.log("DataBase Connected")

})

.catch((error)=>{

    console.log("could Not Connect Database ", error)

})


// Initializing an Instance of Express
const app = express()



// Port / Start Server
const port = 4000

app.listen(port, ()=>{

    console.log(`Server Started at Port ${port}`)

})


// Middle Wares

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/docs',swaggerDocs.serve)
app.use('/docs',swaggerDocs.setup(swaggerDocumentations))



// routes
app.use("/api", userRoutes)
app.use("/api", productRoutes)
app.use("/api", cartRoutes)
app.use("/api", orderRoutes)
app.use("/api", inboxRoutes)