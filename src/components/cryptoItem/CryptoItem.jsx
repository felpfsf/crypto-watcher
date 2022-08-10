import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines'


const CryptoItem = ({ item }) => {
  return (
    <tr className='h-8 border-b overflow-hidden'>
      <td>fav</td>
      <td>{item.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img src={item.image} alt="" className="w-8 h-8 mr-2 rounded-full" />
          <p className="ml-2 hidden md:table-cell">{item.name}</p>
        </div>
      </td>
      <td>{item.symbol?.toUpperCase()}</td>
      <td>R${item.current_price.toLocaleString()}</td>
      <td>
        {item.price_change_percentage_24h > 0
          ?
          (<p className='text-[#BB4430]'>{item.price_change_percentage_24h.toFixed(2)}%</p>)
          :
          (<p className='text-[#5B9279]'>{item.price_change_percentage_24h.toFixed(2)}%</p>)
        }
      </td>
      <td className='hidden md:table-cell w-44'>{item.total_volume.toLocaleString()}</td>
      <td className='hidden md:table-cell w-44'>{item.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={item.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CryptoItem