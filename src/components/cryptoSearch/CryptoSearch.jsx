import React, { useState } from "react"
import { AiOutlineSearch } from 'react-icons/ai'
import CryptoItem from "../cryptoItem/CryptoItem";

const CryptoSearch = ({ crypto }) => {
  console.log(crypto);
  // Search state
  const [search, setSearch] = useState('')

  return (
    <div className="my-2">
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
            <th className="px-1">Rank</th>
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
    </div>
  )
}

export default CryptoSearch