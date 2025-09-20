import React from 'react'
import { useEmoji } from '../Context/EmojiContext'

const DisplayEmoji = () => {

    let { emojies, excuteDelete } = useEmoji()

    function createEmojiCard(emoji) {
        return (
            <div key={emoji._id} className='emoji-card'>
                <div className='icon-container'>
                    <span className='emoji-icon'>{emoji.icon}</span>
                </div>
                <div className='description-container'>
                    <span className='emoji-name'>{emoji.name}</span>
                    <p className='emoji-description'>{emoji.description}</p>
                    <button onClick={() => { excuteDelete(emoji._id) }} className='font-bold bg-red-600 px-2 py-1 text-white'>Delete</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id='emoji-grid'>
                {
                    emojies && emojies.map(createEmojiCard)
                }
            </div>
        </>
    )
}

export default DisplayEmoji
