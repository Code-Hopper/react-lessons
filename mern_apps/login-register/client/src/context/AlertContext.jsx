import React, { createContext, useContext } from 'react'
import { useState } from 'react'

let AlertContext = createContext()

const AlertProvider = ({ children }) => {

    let [alert, setAlert] = useState({
        status: false,
        type: "",
        message: ""
    })

    const showAlert = (type, message) => {
        setAlert({ type, message, status: true })
        setTimeout(() => {
            setAlert({ status: false, type: "", message: "" })
        }, 3000)
    }

    return (
        <AlertContext.Provider value={{ alert, showAlert }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertProvider


export const useAlert = () => useContext(AlertContext)