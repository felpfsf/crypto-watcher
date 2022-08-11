import React from 'react'
// Pages
import CryptoSearch from '../components/cryptoSearch/CryptoSearch'
import Trending from '../components/trending/Trending'

const Home = ({ crypto }) => {
  return (
    <div>
      <CryptoSearch crypto={crypto} />
      <Trending />
    </div>
  )
}

export default Home