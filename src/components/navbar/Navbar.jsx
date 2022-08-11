// React Hooks
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// UI
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  return (
    <header className='w-full h-24 p-4 border-b-2 flex items-center justify-between'>
      <Link className='flex items-center gap-x-4' to={'/'}>
        <img className='w-16 h-16' src="/assets/crypto-favicon-white.png" alt="Crypto Watcher Logo" />
        <h2 className='text-2xl font-audiowide'>Crypto Watcher</h2>
      </Link>
      <div>
        {/* Mobile Menu Icons */}
        {
          navMenu
            ?
            <AiOutlineClose onClick={handleNavMenu} className='block md:hidden h-7 w-7 cursor-pointer' />
            :
            <AiOutlineMenu onClick={handleNavMenu} className='block md:hidden h-7 w-7 cursor-pointer' />
        }

        {/* SignIn / SignOut / Account */}
        <div className='hidden md:block'>
          <AiOutlineUser className='absolute top-10 -ml-2' />
          <Link to={'/account'} className='p-4 font-bold relative'>
            Account
          </Link>
          <button className='px-2 py-1 bg-[#5B9279] rounded-xl'>Sign Out</button>
        </div >
        {/* <div className='hidden md:block'>
          <Link to={'/signin'} className='p-4'>Sign In</Link>
          <Link to={'/signup'} className='ml-2 px-2 py-1 bg-[#5B9279] rounded-xl'>Sign Up</Link>
        </div> */}

        {/* Mobile Navbar */}
        <div className={
          navMenu
            ?
            'md:hidden fixed left-0 top-20 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between z-10 ease-in duration-100'
            :
            'fixed left-[-100%] top-20 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between ease-in duration-100'
        }>
          <ul className='w-full mt-12 p-4'>
            <li onClick={handleNavMenu} className='py-8 border-b-2'>
              <Link to={'/'}>Home</Link>
            </li>
            <li onClick={handleNavMenu} className='py-8 border-b-2'>
              <Link to={'/account'}>Account</Link>
            </li>
          </ul>
          {/* SignIn/SignUp */}
          <div className='w-full p-4 flex flex-col'>
            <Link onClick={handleNavMenu} to={'/signin'}>
              <button className='w-full my-2 p-2 text-xl rounded-xl shadow-xl border hover:bg-[#8FCB9B] ease-in duration-100'>Sign In</button>
            </Link>
            <Link onClick={handleNavMenu} to={'/signup'}>
              <button className='w-full my-2 p-2 text-xl rounded-xl shadow-xl border hover:bg-[#8FCB9B] ease-in duration-100'>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar