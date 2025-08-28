import React from 'react'

import "./style.scss"

const Comp1 = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl !text-primary'>hello this is a component</h1>
      <span className='text-primary'>
        this is a span element
      </span>
      <span className='text-secondary'>
        this is a span element
      </span>
      <span className='text-third bg-[rgba(200,255,0,1)]'>
        this is a span element
      </span>
      <div className='bg-primary w-[500px] h-[500px]'> </div>
    </div>
  )
}

export default Comp1
