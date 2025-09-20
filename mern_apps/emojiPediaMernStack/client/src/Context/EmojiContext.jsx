import React, { useEffect, useState, createContext } from "react"
import { fetchEmojiData, deleteEmoji } from "../api/clientMethods"
import { useContext } from "react"
let EmojiContext = createContext()

let EmojiProvider = ({ children }) => {

    let [emojies, setEmojies] = useState(null)

    async function getInitialData() {
        try {
            let response = await fetchEmojiData()
            setEmojies(response.data)
            console.log('got called !')
        } catch (err) {
            console.log("error while getting initial data : ", err)
        }
    }

    useEffect(() => {
        getInitialData()
    }, [])


    async function excuteDelete(id) {
        try {
            let response = await deleteEmoji(id)
            console.log(response)
            await getInitialData()
        } catch (err) {
            console.log("unable to delete emoji")
            console.log(err)
        }
    }

    return (
        <EmojiContext.Provider value={{ emojies, excuteDelete }}>
            {children}
        </EmojiContext.Provider>
    )
}

export { EmojiProvider }

export const useEmoji = () => useContext(EmojiContext)