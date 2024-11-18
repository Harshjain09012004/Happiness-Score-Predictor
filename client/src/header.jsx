import React from 'react'

export const Header = () => {
  return (
    <>
        <div className='h-24 bg-gray-900 flex place-items-center gap-10 sticky top-0'>
            <img src='public\logo.png' width={170} className='ml-1'/>
            <p className='pacifico-regular text-white text-center text-4xl'>For The Wellbeing Of Society</p>
        </div>
    </>
  )
}
