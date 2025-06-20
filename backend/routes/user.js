import experss from "express"
import { loginUser, logout, registerUser } from "../controllers/userControllers.js"

const router = experss.Router()

router.post("/register",registerUser)
router.post("/login",loginUser )
router.get("/logout",logout)
export default router