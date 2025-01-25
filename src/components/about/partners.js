import React from 'react'

export default function Partners({name, logo}) {
  return (
    <div className='flex flex-col items-center'>
        <div className='h-24 w-24'>
          <img src={`mscpictures/${logo}`}
          className='h-full w-full object-contain'/>
        </div>
          
        <div className='mt-2 flex-wrap text-center'>
            <p className='text-sm w-40'>{name}</p>
        </div>
    </div>
  )
}
