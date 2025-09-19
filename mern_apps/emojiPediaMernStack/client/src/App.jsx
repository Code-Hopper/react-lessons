import React from 'react'
import { EmojiProvider } from './Context/EmojiContext'
import Component1 from './Components/Component1'
const App = () => {
  return (
    <>
      <EmojiProvider>
        <Component1 />
      </EmojiProvider>
    </>
  )
}

export default App
