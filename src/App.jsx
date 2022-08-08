import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  const [crypto, setCrypto] = useState([])

  useEffect(() => {
    axios.get(URL).then(res => {
      setCrypto(res.data)
      console.log(res.data[1]);
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1 className="text-5xl text-teal-500">Hello React Vite</h1>
      {crypto.map(coins => {
        return (
          <div key={coins.id}>
            <h2>{coins.name}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default App
