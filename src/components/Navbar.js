import React from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex h-20 items-center justify-between'>
        <div>
            <Link to={'/'}>
                <img src='Logo.jpg' height={60} width={60}/>
            </Link>
        </div>

        <div className='hidden lg:flex'>
            <ul className='list-none flex m-0 p-0 gap-7 text-sm'>
                <li><Link to={'/'} className='text-black hover:text-red-500'>Home</Link></li>
                <li><Link to={'/about'} className='text-black hover:text-red-500'>About Us</Link></li>
                <li><Link to={'/programs'} className='text-black hover:text-red-500'>Programs and Services</Link></li>
                <li><Link to={'/newsandupdates'} className='text-black hover:text-red-500'>News and Updates</Link></li>
                <li><Link to={'/donate'} className='text-black hover:text-red-500'>Donate</Link></li>
                <li><Link to={'/contact'} className='text-black hover:text-red-500'>Contact Us</Link></li>
 
            </ul>
        </div>

        <div className='lg:hidden hover:cursor-pointer'>
            <FaBars/>
        </div>
    </nav>
  )
}
