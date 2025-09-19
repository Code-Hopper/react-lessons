import React, { useEffect, useState, createContext } from "react"
import { fetchEmojiData } from "../api/clientMethods"
import { useContext } from "react"
let EmojiContext = createContext()

let EmojiProvider = ({ children }) => {

    let [emoji, setEmoji] = useState([])

    async function getInitialData() {
        try {
            let response = await fetchEmojiData()
            setEmoji(response.data)
            console.log('got called !')
        } catch (err) {
            console.log("error while getting initial data : ", err)
        }
    }

    useEffect(() => {
        getInitialData()
    }, [])

    return (
        <EmojiContext.Provider value={{ emoji }}>
            {children}
        </EmojiContext.Provider>
    )
}

export { EmojiProvider }

export const useEmoji = () => useContext(EmojiContext)