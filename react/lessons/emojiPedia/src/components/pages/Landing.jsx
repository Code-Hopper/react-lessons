import React, { useState } from 'react'
import "../Style.scss"

import { emojis } from '../data/emojiData'
import DisplayEmoji from '../sections/DisplayEmoji'
import AddEmoji from '../sections/AddEmoji'

const Landing = () => {

    let [emojisData, setEmojisData] = useState(emojis)

    function addEmoji() {
        setEmojisData((prev) => {
            return [...prev, { icon: "🛟", name: "Ring Buoy", description: "A round white and orange or red ring buoy with string laced through its perimeter. Also called a life preserver." }]
        })
    }

    return (
        <div id='landing-page'>
            {/* <AddEmoji /> */}
            <DisplayEmoji dataToBeDisplayed={emojisData} />
        </div>
    )
}

export default Landing
