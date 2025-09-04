import React, { useState } from 'react'

const AddEmoji = (props) => {

    let [emoji, setEmoji] = useState({
        name: '',
        icon: '',
        description: ''
    })

    const handelChange = (event) => {
        let { name, value } = event.target
        setEmoji((prev) => {
            return { ...prev, [name]: value }
        })
    }


    const handelSubmit = (event) => {
        event.preventDefault()
        console.log(emoji)
        props.addEmojiAction(emoji)
        setEmoji({
            name: '',
            icon: '',
            description: ''
        })
    }

    return (
        <div id='addEmoji'>
            <form onSubmit={handelSubmit}>
                <div className='input-container'>
                    <input required onChange={handelChange} placeholder='Icon' type="text" value={emoji.icon} name='icon' />
                    <input required onChange={handelChange} placeholder='Name' type="text" value={emoji.name} name='name' />
                    <input required onChange={handelChange} placeholder='Description' type="text" value={emoji.description} name='description' />
                </div>
                <button type='submit'>Add Emoji</button>
            </form>
        </div>
    )
}

export default AddEmoji
