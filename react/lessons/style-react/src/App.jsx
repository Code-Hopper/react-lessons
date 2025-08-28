import React from 'react'

// importing bootstrap 

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Comp1 from './components/sections/Comp1'

const App = () => {

  // to style a react element in inline-css

  let myStyle = {
    color: "red",
    backgroundColor: "black"
  }

  return (
    <div>
      <h1 style={myStyle}>hello</h1>
      <h2 className='text-light fw-bolder bg-danger' style={{ color: "blue" }}>hello 2</h2>
      <Comp1 />
    </div>
  )
}

export default App