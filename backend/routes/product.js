import express from 'express'
import { addProduct, deleteProduct, getProductDetails, getProducts, updateProduct } from '../controllers/productController.js'

const router = express.Router()   

router.get("/mehsullar",getProducts)
router.get("/mehsullar/:id",getProductDetails)
router.post("/admin/new",addProduct)
router.delete("/admin/delete/:id",deleteProduct)
router.put("/admin/edit/:id",updateProduct)

export default router