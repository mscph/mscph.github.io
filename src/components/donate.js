import React from 'react'
import { Link } from 'react-router-dom'

export default function DonateChip() {
  return (
    <div className='bg-gray-300 flex items-center justify-center'>

        {/* <img
          alt="This is the cover image"
          src="mscpictures/background.jpg"
          className="w-full h-full object-cover"
        /> */}

        <div className='lg:w-4/12 text-center p-5'>
          <h1 className='font-bold'>With your help </h1>

          <p className='text-xs mt-2'>
            we can  improve communities by providing clean water, educational support, feeding programs, and values formation for disadvantaged youth. It also focuses on preventing epidemic diseases, supporting seminarians in their formation, and offering relief assistance to victims of calamities and disasters.
          </p>

          <div className='bg-red-600 rounded-md mt-3 w-4/12 m-auto p-2'>
            <Link to={'/donate'}>
              <p className='font-bold text-white text-xs'>DONATE NOW</p>
            </Link>
          </div>
        </div>
        

    </div>
  )
}
