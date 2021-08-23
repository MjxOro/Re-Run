require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const PORT = 8080
const userRoutes = require('./routes/userRoutes')
const adPostRoutes = require('./routes/adPostRoutes')
const AdPost = require('./models/adPosts')
const secureUserRoutes = require('./routes/secure/sercureUser')
const authorize = require("./middleware/authorize")


app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(morgan('dev'))


app.use('/preview',adPostRoutes)
app.use('/users',userRoutes)
app.use("/secure", authorize, secureUserRoutes);









//connet to DB
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true,useUnifiedTopology: true},() =>{
	console.log('connected to DB')
})
app.listen(PORT,(req,res)=>{
	console.log('Server started, Listening on port ' + PORT)
})
