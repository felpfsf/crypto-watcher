// React Hooks
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// AuthContext
import { UserAuth } from '../../context/AuthContext'
// UI
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai'


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
        <img className='w-16 h-16' src="/assets/crypto-favicon-white.png" alt="Crypto Watcher Logo" />
        <h2 className='text-xl md:text-2xl font-audiowide'>Crypto Watcher</h2>
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
            <div className='hidden md:flex items-center'>
              <AiOutlineUser className='absolute top-10 -ml-2' />
              <Link to={'/account'} className='p-4 font-bold relative'>
                Account
              </Link>
              <button onClick={handleLogout} className='px-2 py-1 bg-[#5B9279] rounded-xl'>Sign Out</button>
            </div >
          )
          :
          (
            <div className='hidden md:block'>
              <Link to={'/signin'} className='px-2 py-1 mr-4 bg-[#5B9279] rounded-xl'>Sign In</Link>
              <Link to={'/signup'} className='px-2 py-1 bg-[#5B9279] rounded-xl'>Sign Up</Link>
            </div>
          )
        }

        {/* Mobile Navbar */}

        <div className={
          navMenu
            ?
            'md:hidden fixed right-0 top-24 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between z-10 ease-in duration-100'
            :
            'fixed right-[-100%] top-24 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between ease-in duration-100'
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
                  <button className='px-2 py-1 bg-[#5B9279] rounded-xl' onClick={handleLogout}>Sign Out</button>
                </li>
              </ul>
            )
            :
            (
              <div className='w-full mt-10 p-4 flex flex-col items-center justify-center gap-y-4'>
                <Link
                  to={'/signin'}
                  onClick={handleNavMenu}
                  className='w-full px-2 py-4 text-xl text-center font-semibold bg-[#5B9279] border rounded-xl hover:bg-[#8FCB9B] hover:text-[#12130F] ease-in duration-100'
                >
                  Sign In
                </Link>
                <Link
                  to={'/signup'}
                  onClick={handleNavMenu}
                  className='w-full px-2 py-4 text-xl text-center font-semibold bg-[#5B9279] border rounded-xl hover:bg-[#8FCB9B]'
                >
                  Sign Up
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