import express from "express"
import { checkAdmin } from "../middlewares/checkAdmin.js"
import { postUserRegister, postUserLogin, getUserInfo } from "../controllers/controller.js"

const router = express.Router()

router.get('/test', (req, res) => {
    res.status(200).json({ message: "test ran successfully !" })
})

router.post('/user/register', postUserRegister)

router.post('/user/login', postUserLogin)

router.get("/user/profile", checkAdmin, getUserInfo)

export default router

// token -> user -> protected route -> attatch token with a request -> decode token (if user is valid or not)