import React, { useState } from 'react'
import { Hero } from '../../context/UseContext'

interface DetailsProps{
  Master: Hero
  Player: Hero
}

const Details = ({Master, Player}: DetailsProps) => {

  const[isShowDetails, setIsShowDetails] = useState(false)

  return (
    <div className=''>
      <div className='border-8 border-yellow-400'>
        <button className='bg-purple-600 p-2 border-4 border-yellow-600 font-semibold text-yellow-500 text-lg' onClick={() => setIsShowDetails(!isShowDetails)}>
          Ver Detalhes
        </button>
      </div>

      {isShowDetails && (
        <div className={`absolute z-50 border-l-8 border-t-8 border-t-stone-600 border-stone-500  w-[30rem] bg-stone-400 rounded-lg p-2 ${Master.name === Player.name? 'left-0' : 'right-0' }`}>
          <h3 className='text-3xl'>{Master.name}</h3>
          <p className='my-2 text-gray-900'><b className='text-gray-900'>{Master.hability1.name}</b>: {Master.hability1.desc}</p>
          <p className='my-2 text-gray-900'><b className='text-gray-900'>{Master.hability2.name}</b>: {Master.hability2.desc}</p>
          <p className='my-2 text-gray-900'><b className='text-gray-900'>{Master.hability3.name}</b>: {Master.hability3.desc}</p>
          <p className='my-2 text-gray-900'><b className='text-gray-900'>{Master.hability4.name}</b>: {Master.hability4.desc}</p>
        </div>
      )}
    </div>
  )
}

export default Details