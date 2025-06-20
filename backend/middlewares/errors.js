// import ErrorHandler from "../utils/errorHandler.js";

// export default (err, req, res, next)=>{
//   let error ={
//     statusCode:err?.statusCode || 500,
//     message:err?.message || "Internal Server Error"
//   }

// // mongoDB id error
// if(err.name === "CastError"){
//     const message =`yalnis id  .${err.path}`
//      error = new ErrorHandler(message , 404)
// }

// if(process.env.NODE_ENV === "DEVELOPMENT"){
//     res.status(error.statusCode).json({
//         message:error.message,
//         eror:err,
//         stack: err?.stack
//     })
// }

// if(process.env.NODE_ENV === "PRODUCTION"){
//     res.status(error.statusCode).json({
//         message:err.message,
       
//     })
// }
// }



import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  let error = {
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error"
  };

  if (err.name === "CastError") {
    error = new ErrorHandler(`Yalnış ID: ${err.path}`, 404);
  }

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
      error: err,
      stack: err.stack
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message
    });
  }

  // fallback
  return res.status(error.statusCode).json({
    success: false,
    message: error.message
  });
};
