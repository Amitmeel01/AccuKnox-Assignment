import React from 'react'
import { FaSearch, FaRegBell } from 'react-icons/fa'
import Search from './Search'

function Header() {
  return (
    <div className='flex justify-between items-center fixed top-0 right-0 left-0 z-10 shadow-lg p-4 bg-white'>
      <div className='flex justify-center items-center gap-8'>
        <h2>Home</h2>
        <h2 className='text-blue-600 font-bold'>Dashboard v2</h2>
      </div>

      <div className='flex justify-center items-center gap-8'>
       <Search/>
        <FaRegBell />
      </div>
    </div>
  )
}

export default Header
