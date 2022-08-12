import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../services/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    return setDoc(doc(db, 'users', email), { watchList: [] })
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => { unsub() }
  }, [])

  return (
    <UserContext.Provider value={{ logout, signIn, signUp, user }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext)
}
