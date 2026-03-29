import { useState } from "react"
import PopUpEmoji from "./PopUpEmoji"

import image1 from "../assets/hero.png"

const DisplayEmojiCard = (props) => {

    let [targetedEmoji, setTargetedEmoji] = useState({})

    let [openPopUp, setOpenPopUp] = useState(false)

    return (

        <>
            <div onClick={() => {
                setTargetedEmoji(props.item)
                setOpenPopUp(!openPopUp)
            }} key={props.index} className='emoji-item p-5 shadow border border-gray-300 inline-flex gap-3 items-center rounded-lg'>
                <div>
                    <span className='text-3xl'>
                        {props.item.emoji}
                    </span>
                </div>
                <div className='flex flex-col gap-1 '>
                    <span className='font-bold text-xs'>
                        {props.item.name}
                    </span>
                    <span className='text-[.75rem]'>
                        {props.item.description}
                    </span>
                </div>
            </div>
            {
                openPopUp ?
                    <PopUpEmoji setOpenPopUp={setOpenPopUp} data={{ ...targetedEmoji, image1 }} /> :
                    null
            }
        </>

    )
}

export default DisplayEmojiCard

// conditional rendering