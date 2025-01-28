import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

export default function NewsandUpdatesChip({id, date, headline, description, cover_image}) {
  return (
      <div className='w-full'>
          <div className='h-56 bg-gray-200 bg-cover'>
            <img src={`${cover_image}`} alt={headline}  className='h-full w-full object-cover'/>
          </div>

          <div className='h-44'>
            <p className='my-2 opacity-50 text-xs'>{date}</p>
            <h2 className='font-bold text-lg mb-4 line-clamp-1'>{headline}</h2>
            <p className='text-sm line-clamp-5'>{description}</p>
          </div>


          
          <Link to={`/newsdetails/${id}`}>
            <p className='text-red-400 hover:cursor-pointer text-end mt-2 text-sm'>Read More</p>
            </Link>
      </div>
  )
}
