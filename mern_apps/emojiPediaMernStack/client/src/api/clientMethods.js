import axios from "axios";

let baseUrl = "http://localhost:4000/api"

async function fetchEmojiData() {
    try {
        let result = await axios({
            method: "Get",
            url: `${baseUrl}/get-all-emojies`,
        })
        return result.data
    } catch (err) {
        throw err
    }
}

async function deleteEmoji(id) {
    try {

        let result = await axios({
            method: "Delete",
            url: `${baseUrl}/delete-emoji/${id}`
        })

        return result.data

    } catch (err) {
        throw err
    }
}

export { fetchEmojiData, deleteEmoji }