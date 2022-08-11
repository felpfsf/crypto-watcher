import React from 'react'
import { auth } from '../../services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'


const SignOut = () => {
  const navigate = useNavigate()

  const signOut = () => {
    signOut(auth)
  }

  return (
    <>
      <button
        className='w-full my-2 p-2 text-xl rounded-xl shadow-xl border hover:bg-[#8FCB9B] ease-in duration-100'
        onClick={() => auth.signOut(navigate('/'))}
      >
        Sign Out
      </button>
    </>
  )
}

export default SignOut