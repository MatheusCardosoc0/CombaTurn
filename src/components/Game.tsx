import React, { useEffect, useState } from 'react'
import { Hero, useStateContext } from '../context/UseContext'
import { incTurn } from './functions/ModElements'
import SelectorHabilitiesEnemy from './functions/SelectorHabilitesEnemy'
import SelectorHabilitiesPlayer from './functions/SelectorHabilitiesPlayer'
import { getRandomArbitrary } from './Selection'

const Game = () => {


  const [turn, setTurn] = useState(1)
  const [lifePointsPlayer, setLifePointsPlayer] = useState(1)
  const [lifePointsEnemy, setLifePointsEnemy] = useState(1)
  const [EnergyPointsPlayer, setEnergyPointsPlayer] = useState(0)
  const [EnergyPointsEnemy, setEnergyPointsEnemy] = useState(0)
  const { Player, Enemy, setPlayer, setEnemy } = useStateContext()
  const [Winer, setWiner] = useState(false)
  const [nameWiner, setNameWiner] = useState('')

  const { DispatchHabilitiesPlayer } = SelectorHabilitiesPlayer(Player, setTurn, setLifePointsPlayer, setLifePointsEnemy, turn, setEnergyPointsPlayer, EnergyPointsPlayer)

  const { DispatchHabilitiesEnemy } = SelectorHabilitiesEnemy(Enemy, setTurn, setLifePointsEnemy, setLifePointsPlayer, turn, setEnergyPointsEnemy, EnergyPointsEnemy)

  useEffect(() => {
    if (turn % 2 == 0 && lifePointsEnemy >= 0) {
      setTimeout(() => {
        EnemyInteligense()
      }, 1000);
    }
    else {
      return
    }


    if ((EnergyPointsPlayer + 2) > Player.energy) {
      setEnergyPointsPlayer(Player.energy)
    } else {
      setEnergyPointsPlayer((prevEnergy: number) => prevEnergy + 1)
    }
    if ((EnergyPointsEnemy + 2) > Enemy.energy) {
      setEnergyPointsEnemy(Enemy.energy)
    } else {
      setEnergyPointsEnemy((prevEnergy: number) => prevEnergy + 1)
    }

  }, [turn])

  useEffect(() => {
    if (lifePointsPlayer <= 0) {
      setWiner(true)
      setNameWiner(Enemy.name)
    }
    if (lifePointsEnemy <= 0) {
      setWiner(true)
      setNameWiner(Player.name)
    }
  }, [lifePointsEnemy, lifePointsPlayer])

  useEffect(() => {
    setLifePointsPlayer(Player.life)
    setLifePointsEnemy(Enemy.life)
    setEnergyPointsPlayer(Player.energy)
    setEnergyPointsEnemy(Enemy.energy)
  }, [])


  function RecargeEnergyAndPassTurn(setEnergy: any, Master: Hero, energyCurrent: number) {
    incTurn(setTurn)
    if ((energyCurrent + (Master.energy / 2)) > Master.energy) {
      setEnergy(Master.energy)
    } else {
      setEnergy((prevEnergy: number) => prevEnergy + (Master.energy / 2))
    }
  }

  function EnemyInteligense() {
    const ArrayCost = new Array()
    ArrayCost.push(Enemy.habilityCost1, Enemy.habilityCost2, Enemy.habilityCost3, Enemy.habilityCost4)
    console.log(ArrayCost)
    const NewArrayCost = ArrayCost.filter(hability => hability < EnergyPointsEnemy)
    console.log(NewArrayCost)

    const random = getRandomArbitrary(0, NewArrayCost.length)

    if (EnergyPointsEnemy < (Enemy.energy / 3)) {
      RecargeEnergyAndPassTurn(setEnergyPointsEnemy, Enemy, EnergyPointsEnemy)
    }

    else if (NewArrayCost[random] === Enemy.habilityCost1) {
      DispatchHabilitiesEnemy()?.hability1()
    }
    else if (NewArrayCost[random] === Enemy.habilityCost2) {
      DispatchHabilitiesEnemy()?.hability2()
    }
    else if (NewArrayCost[random] === Enemy.habilityCost3) {
      DispatchHabilitiesEnemy()?.hability3()
    }
    else if (NewArrayCost[random] === Enemy.habilityCost4) {
      DispatchHabilitiesEnemy()?.hability4()
    } else {
      RecargeEnergyAndPassTurn(setEnergyPointsEnemy, Enemy, EnergyPointsEnemy)
    }

  }




  return (
    <div className='h-screen w-full bg-gradient-to-r from-slate-100 to-zinc-100'>
      <header className='w-full p-2 flex justify-center items-center bg-gradient-to-b from-slate-100 to-slate-300'>
        <h3 className='text-6xl font-black text-yellow-500 p-2 px-5 bg-purple-600 rounded-full border-4 border-t-yellow-600 border-r-yellow-600 border-b-yellow-700 border-l-yellow-700'>{turn}</h3>
      </header>
      <div className='border-t-8 bg-gradient-to-r from-yellow-700 to-yellow-600 border-transparent bg-clip-border h-[10px] rounded-br-xl rounded-bl-xl'>
      </div>
      <main className='flex justify-between pt-[10rem]'>
        <section>
          <div className='flex flex-col bg-blue-500 p-2 rounded-r-2xl'>
            <div className='flex gap-10'>
              <h4 className='text-white text-3xl font-bold'>{Player.name}</h4>
              <div className='flex flex-col'>
                <span>{lifePointsPlayer.toFixed()}</span>
                <span>{EnergyPointsPlayer.toFixed()}</span>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <button disabled={turn % 2 == 0} onClick={() => DispatchHabilitiesPlayer()?.hability1()}
              >{Player.habilityName1}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability2()} disabled={turn % 2 == 0}>{Player.habilityName2}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability3()} disabled={turn % 2 == 0}>{Player.habilityName3}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability4()} disabled={turn % 2 == 0}>{Player.habilityName4}</button>
              <button onClick={() => RecargeEnergyAndPassTurn(setEnergyPointsPlayer, Player, EnergyPointsPlayer)}
                disabled={turn % 2 == 0} >Passar</button>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col bg-red-500'>
            <h4>{Enemy.name}</h4>
            <span>{lifePointsEnemy.toFixed()}</span>
            <span>{EnergyPointsEnemy.toFixed()}</span>
            <div className='flex flex-col'>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability1()} disabled >{Enemy.habilityName1}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability2()} disabled >{Enemy.habilityName2}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability3()} disabled >{Enemy.habilityName3}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability4()} disabled >{Enemy.habilityName4}</button>
            </div>
          </div>
        </section>
      </main>
      {Winer &&
        <span className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          {nameWiner == Player.name ?
            <h2 className='text-5xl font-bold items-center flex justify-center text--500 span'
            >Parabéns, {nameWiner} venceu!</h2> :
            <h2 className='text-5xl font-bold items-center flex justify-center text-red-500 span'
            >Você perdeu, {nameWiner} venceu!</h2>}
        </span>
      }
    </div>
  )
}

export default Game