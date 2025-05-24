import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Zəhmət olmasa adınızı daxil edin"],
        maxLength: [50, "Adınız 50 simvolu aşa bilməz"],
    },
    email: {
        type: String,
        required: [true, "Emailinizi daxil edin"],
        unique: true,
        // bir email yalniz bir defe 
    },
    password: {
        type: String,
        required: [true, "Şifrənizi daxil edin."],
        minLength: [6, "Şifrəniz minimum 6 simvol olmalıdır."],
        select: false,
        // istifadecinin sifresi gelmesin sorgu zamani 
    },
    avatar: {
        public_id: String,
        url: String,

    },
    role: {
        type: String,
        default: "user",
    },

    // yeni sifre ucun hesh
    resetPasswordToken: String,      
    resetPasswordExpire: Date,
    // tokenin bitme vaxti passwor ucun 


},{
    timestamps:true
})

// bazaya melumat gonderen zaman bas verir bu funk
// adi func , ox func this arizali
userSchema.pre("save",async function(next){
    // this=user 
 if(!this.isModified("password")){
    next()
 }

 this.password = await bcrypt.hash(this.password,12)
})

userSchema.methods.JwtTokeniEldeEt = function() {
    return jwt.sign({
        id:this._id
    },process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRES_TIME
    })
}


export default mongoose.model("User", userSchema)