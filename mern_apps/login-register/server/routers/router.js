import express from "express"
import { postUserRegister, postUserLogin } from "../controllers/controller.js"

const router = express.Router()

router.get('/test', (req, res) => {
    res.status(200).json({ message: "test ran successfully !" })
})

router.post('/user/register', postUserRegister)

router.post('/user/login', postUserLogin)

export default router