import React from 'react'
import CryptoSearch from '../components/cryptoSearch/CryptoSearch'

const Home = ({crypto}) => {
  return (
    <div>
      <CryptoSearch crypto={crypto}/>
    </div>
  )
}

export default Home