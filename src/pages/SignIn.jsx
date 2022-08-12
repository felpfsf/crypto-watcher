import { useState } from 'react'
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
    <div className='max-w-[400px] min-h-[600px] mx-auto px-4 py-20'>
      <h1 className='text-2xl font-bold'>Sign In</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <div>
            <input type="email" placeholder='email' onChange={(evt) => setEmail(evt.target.value)} />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type="password" onChange={(evt) => setPsw(evt.target.value)} />
          </div>
        </div>
        <button>Sign In</button>
      </form>
      <p>Don't have an account? <Link to={'/signup'}>Sign up here</Link></p>
    </div>
  )
}

export default SignIn