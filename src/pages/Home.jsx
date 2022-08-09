import axios from "axios"
import React from "react"
import { useState, useEffect } from "react"

const Home = () => {
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setCoins(res.data)
      console.log(res.data);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className='mt-10 p-4 flex flex-wrap gap-x-4'>
      {coins.map(coin => {
        return (
          <div key={coin.id} className='border'>
            <h2>{coin.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default Home