
import express, { Router } from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/dbConnect.js"
import ErrorMiddleware from "./middlewares/errors.js"
import cookieParser from "cookie-parser"
const app = express()

// Routelarin daxil edilmesi 
import productRoutes from "./routes/product.js"
import userRoutes from "./routes/user.js"

dotenv.config({ path: "config/config.env" })
connectDatabase()

app.use(express.json())

app.use(cookieParser()) 
app.use("/api/v1",productRoutes)
app.use("/api/v1",userRoutes)
app.use(ErrorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(` PORT dinlenilir ${process.env.PORT} ve ${process.env.NODE_ENV} `)
})

