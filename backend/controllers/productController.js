import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/Product.js";

export const getProducts =catchAsyncErrors( async(req,res,next) =>{
  const products =await Product.find()
 
  res.status(200).json({
    products
  })
})

export const getProductDetails= async (req,res)=>{
  const product = await Product.findById(req?.params?.id)

  if(!product){
    res.status(404).json({
      error:"Product not found"
    })
  }
  res.status(200).json({
    product,
  })
}

export const addProduct = async (req,res)=>{
     const product = await Product.create(req?.body);

  if(!product){
    res.status(404).json({
      mesaj:"mehsul eleva elede!!"
    })

  }
  res.status(201).json({
    product
  })
}
 
export const deleteProduct = catchAsyncErrors(async (req,res,next)=>{
  const product = await Product.findByIdAndDelete(req?.params?.id)
  res.status(200).json({
    mesaj:"Mesaj ugurla silindi"
  })
})

export const updateProduct = async (req,res)=>{
  const product = await Product.findByIdAndUpdate(req?.params.id,req.body,{
    new:true
  })
 res.status(200).json({
  product
 })

}
// export const updateProduct = async ()

// promise change

 