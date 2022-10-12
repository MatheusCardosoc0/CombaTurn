import React, { useEffect, useState } from 'react'
import { Hero, useStateContext } from '../context/UseContext'
import SelectorHabilitiesEnemy from './functions/SelectorHabilitesEnemy'
import SelectorHabilitiesPlayer from './functions/SelectorHabilitiesPlayer'
import { getRandomArbitrary } from './Selection'

const Game = () => {


  const [turn, setTurn] = useState(1)
  const [lifePointsPlayer, setLifePointsPlayer] = useState(0)
  const [lifePointsEnemy, setLifePointsEnemy] = useState(0)
  const [EnergyPointsPlayer, setEnergyPointsPlayer] = useState(0)
  const [EnergyPointsEnemy, setEnergyPointsEnemy] = useState(0)
  const { Player, Enemy, setPlayer, setEnemy } = useStateContext()

  const { DispatchHabilitiesPlayer } = SelectorHabilitiesPlayer(Player, setTurn, setLifePointsPlayer, setLifePointsEnemy, turn, setEnergyPointsPlayer, EnergyPointsPlayer)
  
  const { DispatchHabilitiesEnemy } = SelectorHabilitiesEnemy(Enemy, setTurn, setLifePointsEnemy, setLifePointsPlayer, turn, setEnergyPointsEnemy, EnergyPointsEnemy)

  useEffect(() => {
    if (turn % 2 == 0) {
      setTimeout(() => {
        EnemyInteligense()
      }, 1000);
    }
    else {
      return
    }
    if((EnergyPointsPlayer + 2) > Player.energy){
      setEnergyPointsPlayer(Player.energy)
    } else{
      setEnergyPointsPlayer((prevEnergy: number) => prevEnergy + 2)
    }
    if((EnergyPointsEnemy + 2) > Enemy.energy){
      setEnergyPointsEnemy(Enemy.energy)
    } else{
      setEnergyPointsEnemy((prevEnergy: number) => prevEnergy + 2)
    }
    
  }, [turn])

  useEffect(() => {
    setLifePointsPlayer(Player.life)
    setLifePointsEnemy(Enemy.life)
    setEnergyPointsPlayer(Player.energy)
    setEnergyPointsEnemy(Enemy.energy)
  }, [])

  function EnemyInteligense() {
    const ArrayCost = new Array()
    ArrayCost.push(Enemy.habilityCost1, Enemy.habilityCost2, Enemy.habilityCost3, Enemy.habilityCost4)
    console.log(ArrayCost)


    const random = getRandomArbitrary(1, 5)

    if (random === 1) {
      DispatchHabilitiesEnemy()?.hability1()
    }
    else if (random === 2) {
      DispatchHabilitiesEnemy()?.hability2()
    }
    else if (random === 3) {
      DispatchHabilitiesEnemy()?.hability3()
    }
    else if (random === 4) {
      DispatchHabilitiesEnemy()?.hability4()
    }

  }

  function RecargeEnergyAndPassTurn(setEnergy: any, Master: Hero){
    setTurn((prevTurn: number) => prevTurn + 1)
    setEnergy((prevEnergy: number) => prevEnergy + (Master.energy / 2).toFixed())
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
          <div className='flex flex-col bg-blue-500'>
            <h4>{Player.name}</h4>
            <span>{lifePointsPlayer.toFixed()}</span>
            <span>{EnergyPointsPlayer}</span>
            <div className='flex flex-col'>
              <button disabled={turn % 2 == 0} onClick={() => DispatchHabilitiesPlayer()?.hability1()}
              >{Player.habilityName1}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability2()} disabled={turn % 2 == 0}>{Player.habilityName2}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability3()} disabled={turn % 2 == 0}>{Player.habilityName3}</button>
              <button onClick={() => DispatchHabilitiesPlayer()?.hability4()} disabled={turn % 2 == 0}>{Player.habilityName4}</button>
              <button onClick={() => RecargeEnergyAndPassTurn(setEnergyPointsPlayer, Player)} >Passar</button>
            </div>
          </div>
        </section>

        <section>
          <div className='flex flex-col bg-blue-500'>
            <h4>{Enemy.name}</h4>
            <span>{lifePointsEnemy.toFixed()}</span>
            <span>{EnergyPointsEnemy}</span>
            <div className='flex flex-col'>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability1()} disabled >{Enemy.habilityName1}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability2()} disabled >{Enemy.habilityName2}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability3()} disabled >{Enemy.habilityName3}</button>
              <button onClick={() => DispatchHabilitiesEnemy()?.hability4()} disabled >{Enemy.habilityName4}</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Game