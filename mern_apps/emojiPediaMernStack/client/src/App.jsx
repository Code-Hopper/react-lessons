import React from 'react'
import { EmojiProvider } from './Context/EmojiContext'
import DisplayEmoji from './Components/DisplayEmojis'

import "./Components/style.scss"

const App = () => {
  return (
    <>
      <EmojiProvider>
        <DisplayEmoji />
      </EmojiProvider>
    </>
  )
}

export default App
