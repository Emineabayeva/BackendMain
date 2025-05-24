import User from "../models/User.js";

export const registerUser = async (req,res,next) =>{
    // Object destructuring Obyektin parclanmasi (input verilen front)
    // const name = req.body.name
    const {name,email,password} = req.body

    const user = await User.create({
        name , email, password
    })

    const token = user.JwtTokeniEldeEt()

    res.status(201).json({
        token
    })
}