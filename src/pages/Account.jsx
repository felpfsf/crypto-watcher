import React from 'react'
import SignOut from '../components/auth/SignOut'
import FavCoins from '../components/favCoins/FavCoins'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebase'


const Account = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='max-w-[1140px] mx-auto p-4'>
      <div className='my-12 py-8 flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>Account</h1>
          <div className='mt-4'>
            {user.photoURL && <img className='w-24 h-24 rounded-full border border-white/10' src={user.photoURL} alt="User Pic" referrerPolicy='no-referrer' />}
            <h2 className='text-xl font-semibold'>Welcome, {user.displayName}</h2>
          </div>
        </div>
        <div>
          <SignOut />
        </div>
      </div>
      <div className='max-w-[1140px] w-full mx-auto my-12 py-8 flex items-center justify-between'>
        <div className='w-full min-h-[300px] border border-white/25 rounded-md'>
          <h2>Crypto Watch List</h2>
          <FavCoins />
        </div>
      </div>
    </div>
  )
}

export default Account