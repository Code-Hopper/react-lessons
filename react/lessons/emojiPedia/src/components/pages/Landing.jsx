import React, { useState } from 'react'
import "../Style.scss"

import { emojis } from '../data/emojiData'
import DisplayEmoji from '../sections/DisplayEmoji'
import AddEmoji from '../sections/AddEmoji'

const Landing = () => {

    let [emojisData, setEmojisData] = useState(emojis)

    function addEmoji(emoji) {
        setEmojisData((prev) => {
            return [emoji, ...prev]
        })
    }

    return (
        <div id='landing-page'>
            <span className='block text-center font-bold text-4xl py-10'>EmojiPedia</span>
            <AddEmoji addEmojiAction={addEmoji}/>
            <DisplayEmoji dataToBeDisplayed={emojisData} />
        </div>
    )
}

export default Landing
