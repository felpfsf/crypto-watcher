import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

// UI
import { AiOutlineUser } from 'react-icons/ai'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signUp } = UserAuth()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setError('')
    try {
      await signUp(email, psw)
      navigate('/')
    } catch (err) {
      setError(err.message)
      console.log(err.message);
    }
  }
  return (
    <div className='max-w-[400px] min-h-[600px] mx-auto px-4 py-20 flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>Sign Up</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <div className='my-4'>
          <label>E-mail :</label>
          <div className='w-full my-2'>
            <input className='w-full p-2 rounded-2xl text-[#12130F]' type="email" placeholder='email' onChange={(evt) => setEmail(evt.target.value)} />
          </div>
        </div>
        <div className='my-4'>
          <label>Password :</label>
          <div className='w-full my-2'>
            <input className='w-full p-2 rounded-2xl text-[#12130F]' type="password" onChange={(evt) => setPsw(evt.target.value)} />
          </div>
        </div>
        <button className='w-full my-2 p-2 text-[#12130F]/80 text-xl font-semibold bg-[#efb80a] hover:brightness-110 rounded-3xl ease-in duration-100'>
          <div className='relative flex items-center justify-center'>
            <AiOutlineUser className='absolute mr-24 top-1' />
            Sign In
          </div>
        </button>
      </form>
    </div>
  )
}

export default SignUp