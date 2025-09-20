import { emojiModel } from "../models/emojiModel.js"

let getEmojiesData = async (req, res) => {
    try {
        let data = await emojiModel.find({})
        res.status(200).json({ message: "got this data !", data })
    } catch (err) {
        console.log('an error occured while fetching emoji data : ', err)
    }
}

let deleteEmoji = async (req, res) => {
    try {

        let { id } = req.params

        if (!id) throw ("id is empty/invalid !")

        let result = await emojiModel.deleteOne({ "_id": id })

        console.log(result)

        if (!result.acknowledged || result.deletedCount == 0) throw ("unable to delete emoji !")

        res.status(202).json({ message: "emoji is deleted successfully !" })

    } catch (err) {
        console.log('an error occured while deleting an emoji : ', err)
        res.status(400).json({ message: err })
    }
}

export { getEmojiesData, deleteEmoji }