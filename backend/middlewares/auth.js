// import catchAsyncErrors from "./catchAsyncErrors.js";
// import ErrorHandler from "../utils/errorHandler.js";
// import User from "../models/User.js";
// import jwt from "jsonwebtoken"


// export const isAuthenticatedUser = catchAsyncErrors (async(req,res,next)=>{
//     const token = req.cookies.token 

//     if(!token){
//         return next (new ErrorHandler("Mehsulari gormek ucun birinci giris etmelisen",401))
//     }

//    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
//    console.log(decoded)

//    req.user = await User.findById(decoded.id)

//    next()
// })



// export const authorizeRoles = (...roles) =>{
//     return(req,res,next)=> {
//         if(!roles.includes(req.user.role)){
//             return next(new ErrorHandler(`${req.user.role} bu rola sahib sexsler bura giris ede bilmez`,403))
//         }
//         next()
//     }

// }


import jwt from "jsonwebtoken";
import catchAsyncErrors from "./catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/User.js";

export const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return next(
      new ErrorHandler("Məhsulları görmək üçün əvvəlcə giriş etməlisiniz", 401)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user) {
    return next(new ErrorHandler("İstifadəçi tapılmadı", 401));
  }

  next();
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `${req.user.role} bu rola sahib şəxslər buraya giriş edə bilməz`,403
        )
      );
    }
    next();
  };
};
