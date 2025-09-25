import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './components/pages/Register'
import Login from './components/pages/Login.jsx'
import AlertProvider from './context/AlertContext.jsx'
import Alert from './components/sections/AlertMessage/Alert.jsx'

const App = () => {
  return (
    <>
      <AlertProvider>
        <Alert />
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </AlertProvider>
    </>
  )
}

export default App
