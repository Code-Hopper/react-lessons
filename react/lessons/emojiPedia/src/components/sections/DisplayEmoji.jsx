import React from 'react'

const DisplayEmoji = (props) => {

    function createEmojiCard(emoji, index) {
        return (
            <div key={index} className='emoji-card'>
                <div className='icon-container'>
                    <span className='emoji-icon'>{emoji.icon}</span>
                </div>
                <div className='description-container'>
                    <span className='emoji-name'>{emoji.name}</span>
                    <p className='emoji-description'>{emoji.description}</p>
                    <button onClick={() => { props.deleteAction(index) }} className='font-bold bg-red-600 px-2 py-1 text-white'>Delete</button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id='emoji-grid'>
                {
                    props.dataToBeDisplayed.map(createEmojiCard)
                }
            </div>
        </>
    )
}

export default DisplayEmoji
