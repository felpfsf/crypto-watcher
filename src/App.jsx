// React
import { Routes, Route } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// Components
import Navbar from './components/navbar/Navbar'
// Pages
import Account from './pages/Account'
import Home from './pages/Home'
import CryptoCoinDetails from './pages/CryptoCoinDetails'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'

function App() {
  // let counter = 5
  // const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=5&page=1&sparkline=true`
  // const [crypto, setCrypto] = useState([])

  // useEffect(() => {
  //   axios.get(API_URL).then(res => {
  //     setCrypto(res.data)
  //   }).catch(err => console.log(err))
  // }, [API_URL])

  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path={'/'} element={<Home crypto={crypto} counter={counter} />} /> */}
        <Route path={'/'} element={<Home />} />
        <Route path={'/account'} element={<Account />} />
        {/* <Route path={'/signin'} element={<SignIn />} /> */}
        {/* <Route path={'/signup'} element={<SignUp />} /> */}
        <Route path={'/details/:coinId'} element={<CryptoCoinDetails />}>
          <Route path={':coinId'} />
        </Route>
      </Routes>
    </>
  )
}

export default App
