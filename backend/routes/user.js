import experss from "express"
import { registerUser } from "../controllers/userControllers.js"

const router = experss.Router()

router.post("/register",registerUser)

export default router