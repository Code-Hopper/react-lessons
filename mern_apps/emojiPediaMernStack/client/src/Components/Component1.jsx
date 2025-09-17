import React from 'react'
import { useRef } from 'react'

const Component1 = () => {

    let elementRef = useRef()

    let inputRef = useRef()

    const handelClick = () => {
        // console.log(elementRef.current)
        console.log(inputRef.current)
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} className='m-3 border' type="text" />
            <h1 ref={elementRef} >this is some component 1</h1>
            <button onClick={handelClick} className='bg-red-600 text-white p-2'>click here</button>
        </div>
    )
}

export default Component1
