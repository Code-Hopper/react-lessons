import React, { useState, useEffect } from 'react'
import "../Style.scss"

import { emojis } from '../data/emojiData'
import DisplayEmoji from '../sections/DisplayEmoji'
import AddEmoji from '../sections/AddEmoji'

const Landing = () => {

    let [emojisData, setEmojisData] = useState(emojis)


    useEffect(()=>{
        alert("effect hook mounted !")
    },[emojisData])

    function addEmoji(emoji) {
        setEmojisData((prev) => {
            return [emoji, ...prev]
        })
    }

    function removeEmoji(emojiIndex) {
        setEmojisData(prev => {
            let filtredEmojies = prev.filter((element, index) => {
                return emojiIndex != index
            })
            return filtredEmojies
        })
    }

    return (
        <div id='landing-page'>
            <span className='block text-center font-bold text-4xl py-10'>EmojiPedia</span>
            <AddEmoji addEmojiAction={addEmoji} />
            <DisplayEmoji dataToBeDisplayed={emojisData} deleteAction={removeEmoji} />
        </div>
    )
}

export default Landing
