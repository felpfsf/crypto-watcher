import React from 'react'
// Pages
import CryptoSearch from '../components/cryptoSearch/CryptoSearch'
import Trending from '../components/trending/Trending'

// const Home = ({ crypto, counter }) => {
  const Home = () => {
  return (
    <div>
      {/* <CryptoSearch crypto={crypto} counter={counter} /> */}
      <CryptoSearch />
      <Trending />
    </div>
  )
}

export default Home