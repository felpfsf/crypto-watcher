// React Hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// AuthContext
import { UserAuth } from '../../context/AuthContext'
// UI
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import { GoSignIn, GoSignOut } from 'react-icons/go'


const Navbar = () => {
  // Navbar state control
  const [navMenu, setNavMenu] = useState(false)
  // Auth State
  const { user, logout } = UserAuth()
  // Navigate
  const navigate = useNavigate()

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      handleNavMenu()
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <header className='w-full h-24 p-4 border-b-2 flex items-center justify-between'>
      <Link className='flex items-center gap-x-4' to={'/'}>
        <div className='bg-[#efb80a] rounded-full'>
          <img className='w-16 h-16' src="/assets/crypto-favicon-white.png" alt="Crypto Watcher Logo" />
        </div>
        <h1 className='text-xl text-[#efb80a] md:text-4xl font-audiowide'>Crypto Watcher</h1>
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
        {user?.email
          ?
          (
            // Menu Account and Home
            <div className='hidden md:flex items-center'>
              <AiOutlineUser className='absolute top-10 -ml-2' />
              <Link to={'/account'} className='p-4 font-bold relative'>
                Account
              </Link>
              <button onClick={handleLogout} className='relative w-[128px] px-2 py-1 text-[#12130F]/80 bg-[#efb80a] hover:brightness-110 ease-in duration-100 rounded-xl flex items-center justify-center'> <GoSignOut className='absolute mr-[84px] top-[10px]' /> Sign Out</button>
            </div >
          )
          :
          (
            // Sign In and Sign Up Links to show if user not logged in
            <div className='hidden w-full p-6 md:flex items-center justify-center gap-x-8'>
              <Link
                to={'/signin'}
                onClick={handleNavMenu}
                className='w-[160px] h-10 px-8 py-2 text-center font-semibold text-[#12130F]/80 bg-[#efb80a] hover:brightness-110 ease-in duration-100 rounded-xl'
              >
                <div className='relative flex items-center justify-center'>
                  <GoSignIn className='absolute mr-20 top-[6px]' />
                  Sign In
                </div>
              </Link>

              <Link
                to={'/signup'}
                onClick={handleNavMenu}
                className='w-[160px] h-10 px-8 py-2 text-center font-semibold text-[#12130F]/80 bg-[#efb80a] hover:brightness-110 ease-in duration-100 rounded-xl'
              >
                <div className='relative flex items-center justify-center'>
                  <AiOutlineUser className='absolute mr-20 top-1' />
                  Sign Up
                </div>
              </Link>
            </div>
          )
        }

        {/* Mobile Navbar */}

        <div className={
          navMenu
            ?
            'md:hidden fixed right-0 top-24 w-full h-[90%] bg-[#12130F]/50 backdrop-blur-xl flex flex-col items-center justify-between z-10 ease-in duration-100'
            :
            'fixed right-[-100%] top-24 w-full h-[90%] bg-[#12130F]/50 backdrop-blur-xl flex flex-col items-center justify-between ease-in duration-100'
        }>
          {user?.email
            ?
            (
              <ul className='w-full mt-12 p-4'>
                <li>
                  <div className='flex items-end'>
                    <h2 className=''>Welcome <strong>{user.email}</strong></h2>
                  </div>
                </li>
                <li onClick={handleNavMenu} className='py-8 border-b-2 font-bold'>
                  <Link to={'/'}>Home</Link>
                </li>
                <li onClick={handleNavMenu} className='py-8 border-b-2 font-bold'>
                  <Link to={'/account'}>Account</Link>
                </li>
                <li className='py-8'>
                  <button className='px-2 py-2 text-xl font-semibold  bg-[#f7931a] rounded-xl' onClick={handleLogout}>Sign Out</button>
                </li>
              </ul>
            )
            :
            (
              <div className='w-full mt-10 p-4 flex flex-col items-center justify-center gap-y-4'>
                <Link
                  to={'/signin'}
                  onClick={handleNavMenu}
                  className='w-full px-2 py-4 text-xl text-center font-semibold text-[#12130F]/80 bg-[#efb80a] rounded-xl'
                >
                  <div className='relative flex items-center justify-center'>
                    <GoSignIn className='absolute mr-24 top-2' />
                    Sign In
                  </div>
                </Link>
                <Link
                  to={'/signup'}
                  onClick={handleNavMenu}
                  className='w-full px-2 py-4 text-xl text-center font-semibold text-[#12130F]/80 bg-[#efb80a] rounded-xl'
                >
                  <div className='relative flex items-center justify-center'>
                    <AiOutlineUser className='absolute mr-24 top-1' />
                    Sign Up
                  </div>
                </Link>
              </div>
            )
          }

        </div>
      </div>
    </header >
  )
}

export default Navbar