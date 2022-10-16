import React, { useEffect } from 'react'
import { Hero, useStateContext } from '../context/UseContext'

export function getRandomArbitrary(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

const Selection = () => {

  const { Heros, setShow, setPlayer, setEnemy, setMyTurn, MyTurn } = useStateContext()

  function PushHeroOnPlayerAndShowGame(value: Hero) {
    setMyTurn(getRandomArbitrary(1, 3))

    setTimeout(() => {
      setPlayer(value)

      const Enemyes = Heros.filter(item => item.name !== value.name)


      setEnemy(Enemyes[getRandomArbitrary(0, Enemyes.length)])


      setShow('Game')
    }, 2000);
  }

  function whoStarts(){
    if(MyTurn === 1){
      return(
        <div>
          O inimigo começa
        </div>
      )
    }
    if(MyTurn === 2){
      return(
        <div>
          Você começa
        </div>
      )
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
      {MyTurn != 0 && whoStarts()}
    </div>
  )
}

export default Selection