import React from "react"

// import "./index.css"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

// import Abc from "./components/Comp1.jsx"

// import { data, name } from "./components/Comp1.jsx"

import Comp1, { data, name } from "./components/Comp1.jsx"

import { Comp2 } from "./components/Comp2.jsx"

import Comp3 from "./components/Comp3.jsx"

const style1 = { color: "red", backgroundColor: "blue" }

const App = () => {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      {data + 100}
      {name}
      <h1 style={style1}>kuch bhi</h1>
      <h1 style={{ color: "orange" }}>kuch bhi</h1>
      <h1 className="text-primary bg-dark fs-1 fw-bolder">kuch bhi</h1>
      <h1>kuch bhi</h1>
    </div>
  )
}

export default App 