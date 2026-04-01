import React, { useState } from 'react'

const PopUpEmoji = (props) => {
    return (
        <div id='pop-up' className='w-[500px] h-[500px] bg-black rounded fixed start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <button onClick={() => { props.setOpenPopUp(false) }} className='bg-red-500 rounded-full p-3'>X</button>
            <h2 className='text-3xl'>{props.data.emoji}</h2>
            <h2 className='text-3xl text-white'>{props.data.name}</h2>
            <img src={props.data.image1} width={200} height={200} alt="" />
        </div>
    )
}

export default PopUpEmoji


// components
// import and export
// props objects
// conditional rendered components 
// controlled components