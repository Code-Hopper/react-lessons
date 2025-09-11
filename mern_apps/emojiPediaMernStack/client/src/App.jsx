import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  let [message, setMessage] = useState("")

  useEffect(() => {
    getBackendMessage()
  }, [])

  async function getBackendMessage() {
    try {
      let result = await axios({
        method: "Get",
        url: `http://localhost:4000/api/get-all-emojies`,
      })

      if (result.status != 200) { throw ("request failed !") }

      console.log(result.data)

      setMessage(result.data.message)

    } catch (err) {
      console.log("error while fetching backend !")
      console.log(err)
      setMessage(err.response.data.message)
    }
  }

  return (
    <div>
      <h1>hello client</h1>
      <button onClick={() => { getBackendMessage() }} className="bg-blue-500 text-white px-2 py-2">Connect Backend</button>

      {
        message && <h1>{message}</h1>
      }

    </div>
  )
}

export default App
