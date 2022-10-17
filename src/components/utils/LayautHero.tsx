import React, { ReactNode } from 'react'


interface LayautHeroProps {
  name: string
  type: 'Player' | 'Enemy'
  lifePoints: number
  energy: number
  children: ReactNode
}

const LayautHero = ({ energy, lifePoints, name, children, type }: LayautHeroProps) => {

  function typeHero(){
    if(type ===  'Player'){
      return 'bg-blue-500 rounded-r-2xl'
    }
    else if(type ===  'Enemy'){
      return 'bg-red-500 rounded-l-2xl'
    }
  }
  


  return (
    <section>
      <div className={`flex flex-col ${typeHero()} p-2 `}>
        <div className={`flex ${type === 'Enemy' && 'flex flex-row-reverse'} gap-10 justify-between pr-3`}>
          <h4 className={`text-white text-3xl font-bold bg-gray-700 rounded-full px-2 py-2 w-16 h-12 ${type === 'Enemy' && 'flex flex-row-reverse'}`}>{name}</h4>
          <div className='flex flex-col'>
            <span className={`font-bold text-green-500 text-2xl`}><b className='text-gray-100 text-lg'>LP:</b> {lifePoints.toFixed()}</span>
            <span className={`font-bold text-yellow-500 text-2xl`}><b className='text-gray-100 text-lg'>Energy: </b>{energy.toFixed()}</span>
          </div>
        </div>
        <hr className='border-2 mt-1' />
        <div className='grid grid-cols-2 gap-3 mt-5'>
          {children}
        </div>
      </div>
    </section>
  )
}

export default LayautHero