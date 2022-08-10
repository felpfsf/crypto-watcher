// React
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
// Components
import Navbar from './components/navbar/Navbar'
// Pages
import Account from './pages/Account'
import Home from './pages/Home'

function App() {
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  const [crypto, setCrypto] = useState([])

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setCrypto(res.data)
      // console.log(res.data)
    }).catch(err => console.log(err))
  }, [API_URL])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home crypto={crypto} />} />
        <Route path={'/account'} element={<Account />} />
      </Routes>
    </>
  )
}

export default App
