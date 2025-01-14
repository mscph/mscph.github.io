import React from 'react'

export default function CoreValues() {
  return (
    <div className='mt-20'>
        <h1 className='text-center text-lg font-bold text-red-600 lg:text-2xl mb-4'>CORE VALUES</h1>
        
        <div className='flex flex-col lg:flex-row md:flex-row items-left justify-center lg:gap-32 mt-10'>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>1 </h1>
            <p className='text-lg'>Integrity</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>2 </h1>
            <p className='text-lg'>Teamwork</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>3 </h1>
            <p className='text-lg'>Accountability</p>
          </div>
          <div className='flex flex-row  items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>4 </h1>
            <p className='text-lg'>Honesty</p>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row md:flex-row justify-around md:mt-10'>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>5 </h1>
            <p className='text-lg'>Respect</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>6 </h1>
            <p className='text-lg'>Transparency</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>7 </h1>
            <p className='text-lg'>Diversity and Inclusions</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <h1 className='text-red-600 text-5xl'>8 </h1>
            <p className='text-lg'>Trust</p>
          </div>
        </div>   
      </div>
  )
}
