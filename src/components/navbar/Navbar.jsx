// React Hooks
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
// UI
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser, AiOutlineGoogle } from 'react-icons/ai'
import SignIn from '../auth/SignIn'
import SignOut from '../auth/SignOut'
import { auth } from '../../services/firebase'

const Navbar = () => {
  // useAuthState
  const [user] = useAuthState(auth)
  console.log(user)
  // Navbar state control
  const [navMenu, setNavMenu] = useState(false)

  const handleNavMenu = () => {
    setNavMenu(!navMenu)
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
        {user
          ?
          <div className='hidden md:flex items-center'>
            <AiOutlineUser className='absolute top-10 -ml-2' />
            <Link to={'/account'} className='p-4 font-bold relative'>
              Account
            </Link>
            {/* <button className='px-2 py-1 bg-[#5B9279] rounded-xl'>Sign Out</button> */}
            <SignOut />
          </div >
          :
          // <span>não logado</span>
            <SignIn />
        }


        {/* Mobile Navbar */}

        <div className={
          navMenu
            ?
            'md:hidden fixed right-0 top-24 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between z-10 ease-in duration-100'
            :
            'fixed right-[-100%] top-24 w-full h-[90%] bg-[#5B9279] flex flex-col items-center justify-between ease-in duration-100'
        }>
          {user
            ?
            <>
              <ul className='w-full mt-12 p-4'>
                <li>
                  <div className='flex items-end'>
                    {user.photoURL && <img className='w-24 h-24 rounded-full border border-white/10' src={user.photoURL} alt="User Pic" referrerPolicy='no-referrer' />}
                    <h2 className=''>Welcome <strong>{user.displayName}</strong></h2>
                  </div>
                </li>
                <li onClick={handleNavMenu} className='py-8 border-b-2 font-bold'>
                  <Link to={'/'}>Home</Link>
                </li>
                <li onClick={handleNavMenu} className='py-8 border-b-2 font-bold'>
                  <Link to={'/account'}>Account</Link>
                </li>
                <li className='py-8'>
                  <SignOut />
                </li>
              </ul>
            </>
            :
            <div className='w-full p-4 flex justify-center'>
              <SignIn />
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Navbar