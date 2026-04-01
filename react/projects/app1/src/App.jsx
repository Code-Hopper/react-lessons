import React from 'react'
import { useState } from 'react'
import DisplayGrid from './components/DisplayGrid'
import AddEmojiForm from './components/AddEmojiForm'

const App = () => {

  return (
    <>
      <AddEmojiForm />
      <DisplayGrid />
    </>
  )
}

export default App