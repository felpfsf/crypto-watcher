// Hooks
import axios from "axios";
import React, { useEffect, useState } from "react"
// Utils
import CryptoItem from "../cryptoItem/CryptoItem";
// UI
// import { AiOutlineSearch } from 'react-icons/ai'

// const CryptoSearch = ({ crypto, counter }) => {
const CryptoSearch = () => {
  // Search state
  const [search, setSearch] = useState('')
  
  // API State
  const [crypto, setCrypto] = useState([])
  
  // Counter Pagination (kinda of)
  const [count, setCount] = useState(10)
  
  const handleCounter = () => {
    setCount(count + 10)
  }
  console.log(count);

  // API Axios
  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=${count}&page=1&sparkline=true`

  useEffect(() => {
    axios.get(API_URL).then(res => {
      setCrypto(res.data)
    }).catch(err => console.log(err))
  }, [API_URL])

  return (
    <div className="max-w-[1140px] w-full mx-auto py-2 flex flex-col items-center">
      {/* Search form */}
      <div className="w-full h-auto">
        <form className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          <label htmlFor="search-coins" className="my-2 text-xl font-semibold">Search Coins</label>
          <input
            name='search-coins'
            type="text"
            placeholder="Type coin name here..."
            onChange={(evt) => setSearch(evt.target.value)}
            className="w-[90%] md:w-[50%] px-2 py-1 text-[#12130F] bg-[#EAE6E5] rounded-lg"
          />
          {/* <AiOutlineSearch className="absolute top-0 text-red-500" /> */}
        </form>
      </div>
      {/* Crypto Coins Table */}
      <table className="w-full mt-6 border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th className="px-4">Price</th>
            <th>24h(%)</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden md:table-cell">Market</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {crypto.filter((value) => {
            if (search === '') {
              return value
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value
            }
          }).map(item => (
            <CryptoItem item={item} key={item.id} />
          ))}
        </tbody>
      </table>
      <button className="mt-4 w-24 px-2 bg-[#5B9279] rounded-xl" onClick={() => setCount(handleCounter)}>Load More</button>
    </div>
  )
}

export default CryptoSearch