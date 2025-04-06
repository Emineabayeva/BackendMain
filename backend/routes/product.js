import express from 'express'
import { getProducts } from '../controllers/productController.js'


const router = express.Router()   

router.get("/mehsullar",getProducts)

export default router