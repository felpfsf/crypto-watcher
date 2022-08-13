import { useState } from 'react'
import { GoSignIn } from 'react-icons/go'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [psw, setPsw] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth()

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    setError('')
    try {
      await signIn(email, psw)
      navigate('/account')
    } catch (err) {
      setError(err.message)
      console.log(err.message);
    }
  }

  return (
    <div className='max-w-[400px] min-h-[600px] mx-auto px-4 py-20 flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
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
            <GoSignIn className='absolute mr-24 top-2' />
            Sign In
          </div>
        </button>
      </form>
      <p className='my-7'>Don't have an account? <Link to={'/signup'} className='text-[#efb80a]/80 underline underline-offset-2'>Sign up here</Link></p>
    </div>
  )
}

export default SignIn