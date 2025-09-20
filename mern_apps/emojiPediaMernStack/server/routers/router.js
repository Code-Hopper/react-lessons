import express from "express"
import { emojiModel } from "../models/emojiModel.js"
import { getEmojiesData, deleteEmoji } from "../controllers/controller.js"
let router = express.Router()

router.get("/test", (req, res) => {
    console.log('test route hit !')
    res.status(200).json({ message: "test route hit !" })
})

router.get("/get-all-emojies", getEmojiesData)

router.delete("/delete-emoji/:id", deleteEmoji)

export { router }