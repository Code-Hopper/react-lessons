import React, { useContext } from 'react'
import { useData } from '../Context/DataContext'

const Comp1 = () => {

    let { data, setData } = useData()

    console.log(data)

    return (
        <div>
            <h1>this is some component 1</h1>
            <h2>{data}</h2>
            <button onClick={() => { setData(prev => prev + 100) }}>click</button>
        </div>
    )
}

export default Comp1
