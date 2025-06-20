import catchAsyncErrors from "../middlewares/catchAsyncErrors.js"
import User from "../models/User.js";
import sendToken from "../utils/sendToken.js"; 
import ErrorHandler from "../utils/errorHandler.js"

export const registerUser = catchAsyncErrors (async (req,res,next) =>{
    // Object destructuring Obyektin parclanmasi (input verilen front)
    // const name = req.body.name
    const {name,email,password} = req.body

    const user = await User.create({
        name , email, password
    })
// !before
    // const token = user.JwtTokeniEldeEt()

    // res.status(201).json({
    //     token
    // })
//!after
      sendToken(user,201,res)
})

export const loginUser = catchAsyncErrors (async(req,res,next)=> {
    const {email,password}= req.body
    
    if(!email || !password){
        return next(new ErrorHandler("zehmet olmasa,email ve ya sifrenizi daxil edin",400))  
    }

    const user = await User.findOne({email}).select("+password")

    if(!user){

      return next(new ErrorHandler("Bele emaili olan istifadeci tapilmadi", 404))
    }

    const isPasswordMatched =await user.shifreleriMuqayiseEt(password)

    if(!isPasswordMatched){
        // unauthorized request seyehiyyeti catmayan
        return next(new ErrorHandler("Shifreniz yalnisdir",401))
    }

//  !BEFORE

    // const token = user.JwtTokeniEldeEt()
    // res.status(200).json({token})

    // !AFTER

    sendToken(user,200,res)

})


export const logout = catchAsyncErrors (async(req,res,next)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        message:"See ya later"
    })
})

