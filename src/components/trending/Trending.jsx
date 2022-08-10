import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Trending = () => {
  const URL_API_TRENDING = 'https://api.coingecko.com/api/v3/search/trending'

  const [trending, setTrending] = useState([])

  useEffect(() => {
    axios.get(URL_API_TRENDING).then(res => {
      setTrending(res.data.coins)
      console.log(res.data.coins)
    }).catch(err => console.log(err))
  }, [URL_API_TRENDING])

  return (
    <div className='max-w-[1140px] w-full my-12 mx-auto px-2 py-8'>
      <h2 className='text-2xl tracking-widest font-black py-4'>Trending</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {trending.map(tcoin => (
          <div className='max-w-[1140px] w-full mx-auto p-4 px-2 border rounded-lg flex justify-between'>
            <div className='w-full flex items-center justify-between'>
              <div className='flex'>
                <img className='mr-4 rounded-full' src={tcoin.item.small} alt={tcoin.item.name} />
                <div>
                  <p className='font-semibold'>{tcoin.item.name}</p>
                  <p>{tcoin.item.symbol}</p>
                </div>
              </div>
            </div>
            <div className='mr-4 flex items-center'>
              <img className='w-4 mr-2' src="/assets/bitcoin.webp" alt="Bitcoin symbol" />
              <p>{tcoin.item.price_btc.toFixed(7)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending