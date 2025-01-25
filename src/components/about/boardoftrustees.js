import React from 'react'

export default function BoardOfTrusteesCard({name, position, profile}) {
  return (
    <div className='w-40 lg:w-48'>
        <div className='bg-gray-200 h-38 w-full'>
          <img src={`${profile}`}
          className='h-full w-full object-cover'/>
        </div>

        <div>
            <h1 className='font-bold uppercase mt-2 text-xs text-center'>{name}</h1>
            <h2 className='text-xs text-center'>{position}</h2>
        </div>
    </div>
  )
}