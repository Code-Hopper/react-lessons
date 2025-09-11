import { emojiModel } from "../models/emojiModel.js"

let getEmojiesData = async (req, res) => {
    try {
        let data = await emojiModel.find({})
        res.status(200).json({ message: "got this data !", data })
    } catch (err) {
        console.log('an error occured while fetching emoji data : ', err)
    }
}

export { getEmojiesData }