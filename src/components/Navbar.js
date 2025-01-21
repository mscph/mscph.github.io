import React from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex h-20 items-center justify-between'>
        <div>
            <NavLink to={'/'}>
                <img src='MSCLogo.jpg' height={60} width={60} />
            </NavLink>
        </div>

        <div className='hidden lg:flex'>
            <ul className='list-none flex m-0 p-0 gap-7 text-sm'>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>Home</NavLink></li>
                <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>About Us</NavLink></li>
                <li><NavLink to={'/programs'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>Programs and Services</NavLink></li>
                <li><NavLink to={'/newsandupdates'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>News and Updates</NavLink></li>
                <li><NavLink to={'/donate'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>Donate</NavLink></li>
                <li><NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black'}>Contact Us</NavLink></li>
            </ul>
        </div>

        <div className='lg:hidden hover:cursor-pointer'>
            <FaBars />
        </div>
    </nav>
  )
}
