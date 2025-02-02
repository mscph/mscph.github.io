import React from 'react'
import './Footer.css'
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='flex w-full flex-col lg:flex-row px-10 py-5 footer mt-20'>
        <div className='lg:w-8/12'>
            <h3 className='text-center lg:text-left font-bold text-white text-lg'>MSC Mission Office Philippines</h3>
            
            <div className='mt-3'>
                <h4 className='font-bold text-white lg:text-left text-center'>About Us</h4>
                <p className='text-sm text-white lg:text-left text-center' id='description'>MSC Mission Office Philippines is a local branch of the Missionaries of the Sacred Heart. Our primary focus is on mobilizing resources to support development projects aimed at assisting the poorest communities in the Philippines, particularly in remote mission areas.</p>
            </div>
        </div>

        <div className='lg:w-4/12 flex flex-col items-center lg:items-end mt-8 justify-end'>
            <div className='flex flex-row gap-5 mb-3'>
                <FaFacebook className='text-white text-xl' />
                <FaGoogle className='text-white text-xl'/>
                <FaInstagram className='text-white text-xl'/>
            </div>
     
            <p className='text-xs italic text-white'>2024. All Rights Reserved</p>
        </div>
    </footer>
  )
}
