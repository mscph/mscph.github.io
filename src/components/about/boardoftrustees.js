import React from 'react'

export default function BoardOfTrusteesCard({name, position}) {
  return (
    <div className='w-40 lg:w-52'>
        <div className='bg-gray-200 h-40 w-full rounded-md'>
        </div>

        <div>
            <h1 className='font-bold uppercase mt-2 text-xs lg:text-base'>{name}</h1>
            <h2 className='text-xs lg:text-base'>{position}</h2>
        </div>
    </div>
  )
}