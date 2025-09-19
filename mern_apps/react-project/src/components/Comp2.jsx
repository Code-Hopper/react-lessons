import React from 'react'
import { useData } from '../Context/DataContext'
const Comp2 = () => {

    let { data } = useData()

    return (
        <div>
            <h1>this is some component 2</h1>
            <h2>{data}</h2>
        </div>
    )
}   

export default Comp2
