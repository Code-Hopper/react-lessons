import express from "express"
import { postUserRegister } from "../controllers/controller.js"

const router = express.Router()

router.get('/test', (req, res) => {
    res.status(200).json({ message: "test ran successfully !" })
})

router.post('/user/register', postUserRegister)

export default router