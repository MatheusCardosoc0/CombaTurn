import React, { useEffect, useState } from 'react'
import { Hero, useStateContext } from '../context/UseContext'

export function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

const Selection = () => {


  const [spinCoin, setSpinCoin] = useState('')
  const [showCoin, setShowCoin] = useState(false)
  const [showPrimer, setShowPrimer] = useState('')

  const { Heros, setShow, setPlayer, setEnemy, setMyTurn, MyTurn } = useStateContext()

  useEffect(() => {
    setMyTurn(getRandomArbitrary(1, 3))
  },[])

  function PushHeroOnPlayerAndShowGame(value: Hero) {
    front()
    console.log(MyTurn)
   

    setTimeout(() => {
      setPlayer(value)

      const Enemyes = Heros.filter(item => item.name !== value.name)


      setEnemy(Enemyes[getRandomArbitrary(0, Enemyes.length)])
      


      setShow('Game')
    }, 5500);
  }

  function whoStarts() {
    setTimeout(() => {
      if (MyTurn === 1) {
        return  (
          <span>
            o inimigo começa
          </span>
        )
      }
      if (MyTurn === 2) {
        return (
          <span>
            Você começa
          </span>
        )
      }
    }, 3700);
    
  }
  function front() {
    setShowCoin(true)
    setTimeout(() => {
      setSpinCoin('girarFront')
    }, 100);
    setTimeout(() => {
      setSpinCoin('girarBack')
    }, 900);
    setTimeout(() => {
      setSpinCoin('girarFront')
    }, 1800);
    setTimeout(() => {
      setSpinCoin('girarBack')
      setShowPrimer('O enemigo começa')
    }, 2700);
    if(MyTurn === 2){
      setTimeout(() => {
        setSpinCoin('girarFront')
        setShowPrimer('Você começa')
      }, 3400);
    }
    
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
      {showCoin &&
        <div className='fixed h-screen w-full flex justify-center items-center'>
          <div className={`face ${spinCoin}`}>
            <div className='front' />
            <div className='back' />
            <span className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-2xl text-white font-bold textShadow'>{showPrimer}</span>
          </div>
        </div>
      }
    </div>
  )
}

export default Selection