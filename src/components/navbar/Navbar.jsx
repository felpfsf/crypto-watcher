import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
  return (
    <header className='w-full p-2 border-b-2 flex flex-col items-center justify-center gap-4'>
      <div className='flex items-center gap-x-4'>
        <img className='w-16 h-16' src="/assets/crypto-favicon.png" alt="Crypto Watcher Logo" />
        <h2 className='text-3xl font-audiowide'>Crypto Watcher</h2>
      </div>
      <div className='w-full flex items-center justify-center'>
        <input className='w-[90%] bg-slate-100 rounded-xl px-2 py-1' type="text" placeholder='Search...' />
        <AiOutlineSearch className=' -ml-6 text-red-400 cursor-pointer' />
      </div>
    </header>
  )
}

export default Navbar