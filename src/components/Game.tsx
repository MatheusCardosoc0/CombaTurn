import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Hero, useStateContext } from '../context/UseContext'
import { ActionDetails, incTurn } from './functions/ModElements'
import SelectorHabilitiesEnemy from './functions/SelectorHabilitesEnemy'
import SelectorHabilitiesPlayer from './functions/SelectorHabilitiesPlayer'
import { getRandomArbitrary } from './Selection'
import Button from './utils/Button'
import LayautButtons from './utils/LayautButtons'
import LayautHero from './utils/LayautHero'
import 'react-toastify/dist/ReactToastify.css'
import TurnPlayerOrEnemy from './functions/functionsOfGame/TurnPlayerOrEnemy'
import EnemyInteligenseFunction from './functions/functionsOfGame/EnemyInteligence'
import ToastFunctions from './functions/functionsOfGame/ToastFunctions'
import TurnFunctions from './functions/functionsOfGame/TurnFunctions'

const Game = () => {


  const [turn, setTurn] = useState(0)
  const [lifePointsPlayer, setLifePointsPlayer] = useState(1)
  const [Shadow, setShadow] = useState(false)
  const [lifePointsEnemy, setLifePointsEnemy] = useState(1)
  const [EnergyPointsPlayer, setEnergyPointsPlayer] = useState(0)
  const [EnergyPointsEnemy, setEnergyPointsEnemy] = useState(0)
  const { Player, Enemy, MyTurn, setalertResultsAction, alertResultsAction } = useStateContext()
  const [Winer, setWiner] = useState(false)
  const [nameWiner, setNameWiner] = useState('')
  const [ActionTurn, setActionTurn] = useState('')
  const [ShowMatilha, setShowMatilha] = useState(false)

  const { DispatchHabilitiesPlayer } = SelectorHabilitiesPlayer(Player, setTurn, setLifePointsPlayer, setLifePointsEnemy, turn, setEnergyPointsPlayer, EnergyPointsPlayer, setActionTurn, setalertResultsAction, setShowMatilha, lifePointsPlayer, setShadow, Shadow)

  const { DispatchHabilitiesEnemy } = SelectorHabilitiesEnemy(Enemy, setTurn, setLifePointsEnemy, setLifePointsPlayer, turn, setEnergyPointsEnemy, EnergyPointsEnemy, setActionTurn, setalertResultsAction, setShowMatilha, lifePointsEnemy, setShadow, Shadow)

  useEffect(() => {
    setLifePointsPlayer(Player.life)
    setLifePointsEnemy(Enemy.life)
    setEnergyPointsPlayer(Player.energy)
    setEnergyPointsEnemy(Enemy.energy)
    if (turn === 0) {
      setTurn(1)
    }
  }, [])

  const {TurnEnemyParOrImppar, TurnPlayerParOrImppar} = TurnPlayerOrEnemy(MyTurn, turn)

  const {EnemyInteligense} = EnemyInteligenseFunction(Enemy, setEnergyPointsEnemy, RecargeEnergyAndPassTurn, EnergyPointsEnemy, DispatchHabilitiesEnemy)

  const {alertPosition, modAlert} = ToastFunctions(alertResultsAction, TurnEnemyParOrImppar)

  const {EnergyTurnRecharge, actionEnemy, ifOnMatilha} = TurnFunctions(TurnEnemyParOrImppar, lifePointsEnemy, EnemyInteligense, ShowMatilha, Player, TurnPlayerParOrImppar, setLifePointsEnemy, setalertResultsAction, Enemy, setLifePointsPlayer, lifePointsPlayer, EnergyPointsPlayer, setEnergyPointsPlayer, EnergyPointsEnemy, setEnergyPointsEnemy)




  useEffect(() => {
    actionEnemy()
    ifOnMatilha()
    EnergyTurnRecharge()

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



  function RecargeEnergyAndPassTurn(setEnergy: any, Master: Hero, energyCurrent: number) {
    incTurn(setTurn)
    ActionDetails('Passou a vez para recuperar energia', setActionTurn)
    setalertResultsAction('suport')
    toast.success(- 25)
    if ((energyCurrent + (Master.energy / 2)) > Master.energy) {
      setEnergy(Master.energy)
    } else {
      setEnergy((prevEnergy: number) => prevEnergy + (Master.energy / 2))
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
        <LayautHero type='Player' energy={EnergyPointsPlayer} name={Player.name} lifePoints={lifePointsPlayer}>
          <LayautButtons turnEnemy={TurnEnemyParOrImppar} DispatchHabilitiesMaster={DispatchHabilitiesPlayer} Master={Player} turn={turn} />
          <Button custom='bg-slate-500 z-10' onClick={() => RecargeEnergyAndPassTurn(setEnergyPointsPlayer, Player, EnergyPointsPlayer)}
            disabled={TurnEnemyParOrImppar()} >Passar</Button>
           {ShowMatilha && Player.name === 'Lobisomen' && <img className='fixed w-32 mt-28 inverter'
           src='https://i.pinimg.com/originals/cb/da/40/cbda4089de4eb28561b6fa08435e4170.png' />}
        </LayautHero>

        <LayautHero energy={EnergyPointsEnemy} lifePoints={lifePointsEnemy} name={Enemy.name} type='Enemy'>
          <LayautButtons turnEnemy={TurnEnemyParOrImppar} DispatchHabilitiesMaster={DispatchHabilitiesEnemy} Master={Enemy} turn={turn} enemy={true} />
          {ShowMatilha && Enemy.name === 'Lobisomen' && <img className='fixed w-32 mt-12'
           src='https://i.pinimg.com/originals/cb/da/40/cbda4089de4eb28561b6fa08435e4170.png' />}
        </LayautHero>

      </main>
      {Winer &&
        <span className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          {nameWiner == Player.name ?
            <h2 className='text-5xl font-bold items-center flex justify-center text-yellow-500 span'
            >Parabéns, {nameWiner} venceu!</h2> :
            <h2 className='text-5xl font-bold items-center flex justify-center text-red-500 span'
            >Você perdeu, {nameWiner} venceu!</h2>}
        </span>
      }
      {ActionTurn.length > 0 &&
        <span className=' fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-yellow-500 to-yellow-600 w-[25rem] h-[20rem] p-2 font-bold rounded-2xl'>
          <div className={`bg-gradient-to-b from-slate-100 to-slate-300 text-2xl rounded-2xl flex w-full h-full p-4 items-center ${TurnEnemyParOrImppar() ? 'text-blue-500' : 'text-red-500'}`}>
            {ActionTurn}
          </div>
        </span>
      }
      <ToastContainer autoClose={1000} hideProgressBar={true} icon={false} toastClassName={`bg-transparent ${modAlert()}`} closeButton={false} className={`text-2xl w-24 font-bold } `} position={`${alertPosition()}`} />
    </div>
  )
}

export default Game