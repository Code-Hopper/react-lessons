import React from 'react'
import { data as EmojiData } from "./data/emojies.js"
import DisplayEmojiCard from './DisplayEmojiCard.jsx'


const DisplayGrid = () => {
  return (
    <div className='p-5 grid gap-2 grid-cols-6'>
      {
        EmojiData.map((emoji, index) => {
          return <DisplayEmojiCard index={index} item={emoji} />
        })
      }
    </div>
  )
}

export default DisplayGrid