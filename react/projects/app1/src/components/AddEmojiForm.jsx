import React, { useState } from 'react'

const AddEmojiForm = () => {

    let [emoji, setEmoji] = useState("")
    let [name, setName] = useState("")
    let [description, setDescription] = useState("")

    return (
        <div className='p-10'>
            <h1 className='my-5 font-black text-2xl text-center'>Add Emoji Form</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                // console.log(emoji)
                // console.log(name)
                // console.log(description)
                
                let newEmojiObject = {emoji,name,description}
                console.log(newEmojiObject)

            }} className='p-2 flex justify-center items-center flex-col gap-3'>
                <div className='flex gap-2'>

                    <input name='emoji' value={emoji} onChange={(e) => {
                        setEmoji(e.target.value)
                    }} className='border-1 border-gray-300 rounded-2xl focus:outline-none focus:ring-1 ring-blue-400 p-2 transition' type="text" placeholder='emoji' required/>

                    <input name='name' value={name} onChange={(e) => {
                        setName(e.target.value)
                    }} className='border-1 border-gray-300 rounded-2xl focus:outline-none focus:ring-1 ring-blue-400 p-2 transition' type="text" placeholder='name' required/>

                    <input name='description' value={description} onChange={(e) => {
                        setDescription(e.target.value)
                    }} className='border-1 border-gray-300 rounded-2xl focus:outline-none focus:ring-1 ring-blue-400 p-2 transition' type="text" placeholder='description' required/>

                </div>
                <button type='submit' className='bg-green-400 rounded-2xl px-3 py-2 focus:bg-green-500 transition'>Add Emoji</button>
            </form>
        </div>
    )
}

export default AddEmojiForm
