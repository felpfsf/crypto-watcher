import React from 'react'
import { auth } from '../../services/firebase'

const SignOut = () => {
  const signOut = () => {
    signOut(auth)
  }

  return (
    <>
      <button
        className='w-full my-2 p-2 text-xl rounded-xl shadow-xl border hover:bg-[#8FCB9B] ease-in duration-100'
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    </>
  )
}

export default SignOut