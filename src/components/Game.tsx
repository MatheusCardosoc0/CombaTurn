import React, { useState } from 'react'
import { useStateContext } from '../context/UseContext'
import { StatsBolsonaro } from './Heros/Bolsonaro'

const Game = () => {


  const [turn, setTurn] = useState(1)
  const { Player, Enemy } = useStateContext()
  const {Teste} = StatsBolsonaro()

  return (
    <div className='h-screen w-full bg-gradient-to-r from-slate-100 to-zinc-100'>
      <header className='w-full p-2 flex justify-center items-center bg-gradient-to-b from-slate-100 to-slate-300'>
        <h3 className='text-6xl font-black text-yellow-500 p-2 px-5 bg-purple-600 rounded-full border-4 border-t-yellow-600 border-r-yellow-600 border-b-yellow-700 border-l-yellow-700'>{turn}</h3>
      </header>
      <div className='border-t-8 bg-gradient-to-r from-yellow-700 to-yellow-600 border-transparent bg-clip-border h-[10px] rounded-br-xl rounded-bl-xl'>
      </div>
      <main className='flex justify-between pt-[10rem]'>
        <section>
          <div className='flex flex-col bg-blue-500'>
            <h4>{Player.name}</h4>
            <div className='flex flex-col'>
              <button onClick={() =>  Teste(Player)}>Atack1</button>
              <button onClick={Player.hability2}>Atack2</button>
              <button onClick={Player.hability3}>Atack3</button>
              <button onClick={Player.hability4}>Atack4</button>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col bg-blue-500'>
            <h4>{Enemy.name}</h4>
            <div className='flex flex-col'>
              <button onClick={Enemy.hability1}>Atack1</button>
              <button onClick={Enemy.hability2}>Atack2</button>
              <button onClick={Enemy.hability3}>Atack3</button>
              <button onClick={Enemy.hability4}>Atack4</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Game