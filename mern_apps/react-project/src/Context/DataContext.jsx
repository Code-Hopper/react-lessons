import React, { useState, useContext, createContext } from "react";

let DataContext = createContext()

let DataProvider = ({ children }) => {

    let [data, setData] = useState(100)

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider }

const useData = () => {
    return useContext(DataContext)
}

export { useData }