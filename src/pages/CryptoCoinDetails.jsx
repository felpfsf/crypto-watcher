// Hooks
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// Utils
import axios from 'axios'
import DOMPurify from 'dompurify'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const CryptoCoinDetails = () => {
  const params = useParams()

  const URL_API_ID = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  const [coinDetail, setCoinDetail] = useState({})


  useEffect(() => {
    axios.get(URL_API_ID).then(res => {
      setCoinDetail(res.data)
      console.log(res.data);
    }).catch(err => console.log(err))
  }, [URL_API_ID])

  return (
    <div className='max-w-[1140px] w-full my-12 py-8 mx-auto'>

      {/* Header */}
      <div className='px-2 py-8 flex items-center' >
        <img className='w-20 mr-9' src={coinDetail.image?.large} alt={coinDetail.name} />
        <div>
          <h2 className='text-2xl font-semibold'>{coinDetail?.name}</h2>
          <p>{coinDetail.symbol?.toUpperCase()}</p>
        </div>
      </div>

      {/* Sparklines */}
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='px-2 flex justify-between'>
            {coinDetail.market_data?.current_price
              ?
              (<p>R$ {coinDetail.market_data.current_price.brl.toLocaleString()}</p>)
              :
              null
            }
            <p>7 Days</p>
          </div>
          <div className='mt-2'>
            <Sparklines data={coinDetail.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal' />
            </Sparklines>
          </div>

          {/* Market Cap / Volume */}
          <div className='mt-2 px-2 py-4 flex justify-between'>
            <div>
              <h4 className='text-sm text-[#EAE6E5]/60'>Market Cap</h4>
              {coinDetail.market_data?.market_cap
                ?
                (<p className='font-bold'>R$ {coinDetail.market_data.market_cap.brl.toLocaleString()}</p>)
                :
                null
              }
            </div>
            <div>
              <h4 className='text-sm text-[#EAE6E5]/60'>Volume(24h)</h4>
              {coinDetail.market_data?.total_volume
                ?
                (<p className='font-bold'>R$ {coinDetail.market_data.total_volume.brl.toLocaleString()}</p>)
                :
                null}
            </div>
          </div>

          {/* High / Low */}
          <div className='px-2 py-4 flex justify-between'>
            <div>
              <h4 className='text-sm text-[#EAE6E5]/60'>24h High</h4>
              {coinDetail.market_data?.high_24h
                ?
                (<p className='font-bold'>R$ {coinDetail.market_data.high_24h.brl.toLocaleString()}</p>)
                : null
              }
            </div>
            <div>
              <h4 className='text-sm text-[#EAE6E5]/60'>24h Low</h4>
              {coinDetail.market_data?.low_24h
                ?
                (<p className='font-bold'>R$ {coinDetail.market_data.low_24h.brl.toLocaleString()}</p>)
                :
                null
              }
            </div>
          </div>
        </div>

        {/* Market Stats */}
        <div className='px-2'>
          <h3 className='text-xl font-bold'>Market Stats</h3>

          <div className='py-4 flex justify-between'>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Market Rank</h5>
              <h4 className='text-lg font-bold'>{coinDetail.market_cap_rank}</h4>
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Hashing Algorithm</h5>
              {coinDetail.hashing_algorithm
                ?
                (<h4 className='text-lg font-bold'>{coinDetail.hashing_algorithm}</h4>)
                :
                null
              }
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Trust Score</h5>
              {coinDetail.tickers
                ?
                (<h4 className='text-lg font-bold'>{coinDetail.liquidity_score.toFixed(2)}</h4>)
                :
                null
              }
            </div>
          </div>

          {/* 24h - 14d */}
          <div className='py-4 flex justify-between'>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 24h</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_24h.toFixed(2)} %</h4>
                :
                null
              }
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 7d</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_7d.toFixed(2)} %</h4>
                :
                null
              }
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 14d</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_14d.toFixed(2)} %</h4>
                :
                null
              }
            </div>
          </div>

          {/* 30d - 1y */}
          <div className='py-4 flex justify-between'>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 30d</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_30d.toFixed(2)} %</h4>
                :
                null
              }
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 60d</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_60d.toFixed(2)} %</h4>
                :
                null
              }
            </div>
            <div>
              <h5 className='text-sm text-[#EAE6E5]/60'>Price Change 1y</h5>
              {coinDetail.market_data
                ?
                <h4 className='text-lg font-bold'>{coinDetail.market_data.price_change_percentage_1y.toFixed(2)} %</h4>
                :
                null
              }
            </div>
          </div>

          {/* Social Links */}

          {/* 
          <div>
              Twitter
              Facebook
              Reddit
              Github
          </div>
          */}

        </div>

      </div>

      {/* Description */}
      {/* DOM Purify - It sanitize the HTML */}
      <div className='px-2 py-4'>
        <h4 className='text-xl font-bold'>About <span className='font-black underline underline-offset-4 tracking-widest'>{coinDetail.name}:</span> </h4>
        <p
          className='mt-4 p-2 text-justify border border-white/25 rounded-md'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coinDetail.description ? coinDetail.description.en : '') }}>
        </p>
      </div>

    </div>
  )
}

export default CryptoCoinDetails