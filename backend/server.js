
const express= require("express")
const cors = require('cors');
const app =express()
const {connect} =require('./config/db')
const {bookRouter}=require("./routes/book.routes")

const {userRouter} =require('./routes/userRoutes')
const  {authenticate} =require("./middlewares/auth")

app.use(express.json())
app.use('/user',userRouter)
app.use(authenticate)
app.use("/book",bookRouter)
//app.use(cors({origin:"*"}))

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from http://localhost:3000
    credentials: true,
    allowedHeaders: ['Content-Type'] // Allow 'Content-Type' header
  }));

app.listen(8080,async()=>{
    try{
        await connect
        console.log(`port runing mine at ${8080}`)
        console.log("connected to db") 
    }catch(err){
        console.log(err)
        console.log("trouble in connected to db")
    }
  
})