import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// FireStore
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../services/firebase'
// Context
import { UserAuth } from '../../context/AuthContext'
// UI
import { AiOutlineDelete } from 'react-icons/ai'

const FavCoins = () => {
  const [coins, setCoins] = useState([])
  const { user } = UserAuth()

  // Load Watch List
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
      setCoins(doc.data()?.watchList)
    })
  }, [user.email])

  const coinPath = doc(db, 'users', `${user?.email}`)

  // Delete Function
  const deleteCoin = async (passedid) => {
    try {
      const result = coins.filter((item) => item.id !== passedid)
      await updateDoc(coinPath, {
        watchList: result
      })
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      {coins?.length === 0
        ? (
          <p>
            You don't have any coins saved. To add a coin to your watch list please click on the star icon.<Link to={'/'}>Click here to search</Link>
          </p>
        ) : (
          // Will render only if user has any coin saved
          < table className='w-full border-collapse text-center'>
            <thead>
              <tr className='border-b'>
                <th className='px-4'>#</th>
                <th className='text-left'>Coin</th>
                <th className='text-left'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {coins?.map((coin) => (
                <tr className='h-14 overflow-hidden' key={coin.id}>
                  <td>{coin?.rank}</td>
                  <td>
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
                  <td className='pl-8'>
                    <AiOutlineDelete onClick={() => deleteCoin(coin.id)} className='cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div >
  )
}

export default FavCoins