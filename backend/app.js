 
 import express from "express"

 const app = express()

 import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js"

 dotenv.config({path:"config/config.env"})


 connectDatabase()

//  app.get('/')

 app.listen(process.env.PORT,()=>{
console.log(` PORT dinlenilir ${process.env.PORT} ve ${process.env.NODE_ENV } `)
 })
