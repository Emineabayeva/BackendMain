
import express, { Router } from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js"

const app = express()

// Routelarin daxil edilmesi 
import productRoutes from "./routes/product.js"

dotenv.config({ path: "config/config.env" })
connectDatabase()

app.use(express.json())

app.use("/api/v1",productRoutes)

//  app.get('/')

app.listen(process.env.PORT, () => {
    console.log(` PORT dinlenilir ${process.env.PORT} ve ${process.env.NODE_ENV} `)
})
