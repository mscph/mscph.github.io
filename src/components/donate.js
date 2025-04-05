import React from 'react'
import { Link } from 'react-router-dom'

export default function DonateChip() {
  return (
    <div className='relative w-full h-auto flex items-center justify-center'>
      {/* Background Image */}
      <img
        alt="This is the cover image"
        src="mscpictures/Feb242024/featured_photo1.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
      />

      {/* Overlay to dim the background (optional) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

      {/* Text Content */}
      <div className='relative z-20 lg:w-4/12 text-center p-5 text-white'>
        <h1 className='font-bold text-xl'>With your help</h1>
        <p className='text-xs mt-2'>
          we can improve communities by providing clean water, educational support, feeding programs, and values formation for disadvantaged youth. It also focuses on preventing epidemic diseases, supporting seminarians in their formation, and offering relief assistance to victims of calamities and disasters.
        </p>

        <div className='bg-red-600 rounded-md mt-3 w-6/12 md:w-4/12 m-auto p-2'>
          <Link to={'/donate'}>
            <p className='font-bold text-white text-xs'>DONATE NOW</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
