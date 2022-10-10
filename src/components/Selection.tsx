import React, { useEffect } from 'react'
import { Hero, useStateContext } from '../context/UseContext'
import Lula from './Heros/Lula'

const Selection = () => {

  const { Heros, setShow, setPlayer, Player, Enemy, setEnemy } = useStateContext()

  function getRandomArbitrary(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

  function PushHeroOnPlayerAndShowGame(value: Hero) {
    setPlayer(value)

    const newCartItems = Heros.filter(item => item.name !== value.name)


    setEnemy(newCartItems[getRandomArbitrary(0, newCartItems.length)])


    setShow('Game')
  }
  


  return (
    <div className='h-screen w-full items-center flex justify-center flex-col bg-gradient-to-r from-gray-900 via-blue-500 to-gray-900'>
      <section className='bg-slate-300 px-8 py-6 rounded-lg drop-shadow-[-16px_12px_2px_rgba(45,16,16,30.35)]'>
        <h2 className='text-3xl mb-6'>Selecione com quem irá jogar</h2>
        <div className='bg-blue-500 flex justify-around py-8 rounded-lg'>
          {Heros.map(hero => {
            return (
              <button
                className='bg-slate-200 rounded-full p-5'
                key={hero.name}
                onClick={() => PushHeroOnPlayerAndShowGame(hero)}>
                {hero.name}
              </button>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Selection