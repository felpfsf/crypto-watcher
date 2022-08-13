import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

import FavCoins from '../components/favCoins/FavCoins'
import { GoSignOut } from 'react-icons/go'

const Account = () => {
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (e) {
      console.log(e.message);
    }
  }

  if (user) {
    return (
      <div className='max-w-[1140px] mx-auto p-4'>
        <div className='my-12 py-8 flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold'>Account</h1>
            <div className='mt-4'>
              <h2 className='text-xl font-semibold'>Welcome, {user?.email}</h2>
            </div>
          </div>
          <div>
          <button onClick={handleLogout} className='relative w-[128px] px-2 py-1 text-[#12130F]/80 bg-[#efb80a] hover:brightness-110 ease-in duration-100 rounded-xl flex items-center justify-center'> <GoSignOut className='absolute mr-[84px] top-[10px]' /> Sign Out</button>
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
  } else { return <Navigate to={'/signin'} /> }
}

export default Account