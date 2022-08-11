// Hooks
import React from 'react'
import { Link } from 'react-router-dom'
// Ultils
import { Sparklines, SparklinesLine } from 'react-sparklines'
// Icons
import { AiOutlineStar } from 'react-icons/ai'


const CryptoItem = ({ item }) => {
  return (
    <tr className='h-14 border-b overflow-hidden'>
      <td><AiOutlineStar /></td>
      <td>{item.market_cap_rank}</td>
      <td className='md:w-[190px] py-4 px-4'>
        <Link to={`/details/${item.id}`}>
          <div className="flex flex-col md:flex-row items-center">
            <img src={item.image} alt="" className="w-8 h-8 mr-2 rounded-full" />
            <div className='text-left flex flex-col md:flex-row gap-x-1'>
              <p className="hidden md:table-cell">{item.name}</p>
              <p className='font-semibold'>{item.symbol?.toUpperCase()}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className='px-2'>R${item.current_price.toLocaleString()}</td>
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