// export default (controllerFunction) =>(req,res,next) => Promise.resolve(controllerFunction(req,res, next)).catch(next)
// export default (controllerFunction) => (req,res,next)=>Promise.resolve(controllerFunction(req,res,next)).catch(next)


export default (controllerFunction) => (req, res, next) =>Promise.resolve(controllerFunction(req, res, next)).catch(next);

