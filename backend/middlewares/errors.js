import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next)=>{
  let error ={
    statusCode:err?.statusCode || 500,
    message:err?.message || "Internal Server Error"
  }

// mongoDB id error
if(err.name === "CanstError"){
    const message =`yalnis id  .${err.path}`
     error = new ErrorHandler(message , 404)
}

if(process.env.NODE_ENV === "DEVLOPMENT"){
    res.status(error.statusCode).json({
        message:error.message,
        eror:err,
        stack: err?.stack
    })
}

if(process.env.NODE_ENV === "PRODUCTION"){
    res.status(error.statusCode).json({
        message:err.message,
       
    })
}

}