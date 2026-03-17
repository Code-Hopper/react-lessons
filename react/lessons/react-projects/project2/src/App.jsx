import React from 'react'
import "./index.css"
import "./style.scss"

const App = () => {
  return (
    <div>
      <h1
        className='text-red-400 text-4xl font-bold absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>hello</h1>

      <div className='parent'>
        <div></div>
      </div>
    </div>
  )
}

export default App

// {
//   color: red;
//   font - weight: bold,
//     font - size: 1.5rem,
//       position: "absolute";
//   left: 50 %;
//   top: 50 %;
//   transform: translate(-50 %, -50 %);
// }