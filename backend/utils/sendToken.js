export default(user, statusCode, res) =>{
    const token = user.JwtTokeniEldeEt()
    const options = {
        expires: new Date(Date.now() + Number( process.env.COOKIE_EXPIRES_TIME) * 24*60*60*1000), 
        httpOnly:true  
    }

    res.status(statusCode)
   .cookie("token", token, options)
   .json({
       success: true,
       token,
       user
   });

    // res.status(statusCode).cookie("token",token, options)
}