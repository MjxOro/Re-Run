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


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use('/users',userRoutes)







//connet to DB
mongoose.connect('mongodb://127.0.0.1:27017/test_db',{useNewUrlParser: true,useUnifiedTopology: true},() =>{
	console.log('connected to DB')
})
app.listen(PORT,(req,res)=>{
	console.log('Server started, Listening on port ' + PORT)
})
