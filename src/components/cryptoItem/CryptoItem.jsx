// Hooks
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Context
import { UserAuth } from '../../context/AuthContext'
// Firebase
import { db } from '../../services/firebase'
import { doc, arrayUnion, updateDoc } from 'firebase/firestore'
// Ultils
import { Sparklines, SparklinesLine } from 'react-sparklines'
// Icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const CryptoItem = ({ coin }) => {
  const [favCoin, setFavCoin] = useState(false)
  const { user } = UserAuth()

  const coinPath = doc(db, 'users', `${user?.email}`)

  const markFavCoin = async () => {
    if (user?.email) {
      setFavCoin(true)
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol
        })
      })
    } else {
      alert('Please sign in to save a coin to your watch list')
    }
  }



  return (
    <tr className='h-14 border-b overflow-hidden'>
      <td onClick={markFavCoin}>
        {favCoin
          ?
          <AiFillStar />
          :
          <AiOutlineStar />
        }
      </td>
      <td>{coin.market_cap_rank}</td>
      <td className='md:w-[190px] py-4 px-4'>
        <Link to={`/details/${coin.id}`}>
          <div className="flex flex-col md:flex-row items-center">
            <img src={coin.image} alt="" className="w-8 h-8 mr-2 rounded-full" />
            <div className='text-left flex flex-col md:flex-row gap-x-1'>
              <p className="hidden md:table-cell">{coin.name}</p>
              <p className='font-semibold'>{coin.symbol?.toUpperCase()}</p>
            </div>
          </div>
        </Link>
      </td>
      <td className='px-2'>R${coin.current_price.toLocaleString()}</td>
      <td>
        {coin.price_change_percentage_24h > 0
          ?
          (<p className='text-[#BB4430]'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)
          :
          (<p className='text-[#5B9279]'>{coin.price_change_percentage_24h.toFixed(2)}%</p>)
        }
      </td>
      <td className='hidden md:table-cell w-44'>{coin.total_volume.toLocaleString()}</td>
      <td className='hidden md:table-cell w-44'>{coin.market_cap.toLocaleString()}</td>
      <td>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color='teal' />
        </Sparklines>
      </td>
    </tr>
  )
}

export default CryptoItem