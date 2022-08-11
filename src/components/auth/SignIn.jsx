import React, { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

// Firebase Auth
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { auth } from '../../services/firebase'
// UI
import { FcGoogle } from 'react-icons/fc'


const SignIn = () => {
  const navigate = useNavigate()

  // User state
  const [user, setUser] = useState({})


  const handleAuth = () => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user)
        // console.log(result)
        // navigate('/')
      })
      .catch(err => console.log(err))
  }

  console.log(user);
  return (
    <>
      <button className='w-[90%] my-2 p-2 text-xl rounded-xl shadow-xl border hover:bg-[#8FCB9B] ease-in duration-100 flex items-center justify-center' onClick={handleAuth}>
        <FcGoogle className='mr-4' />
        Sign In with Google
      </button>
    </>
  )
}

export default SignIn