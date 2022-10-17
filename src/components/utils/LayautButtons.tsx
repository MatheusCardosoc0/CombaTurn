import React, { useEffect, useState } from 'react'
import { Hero } from '../../context/UseContext'
import Button from './Button'


interface LayautButtonsProps{
  Master: Hero
  DispatchHabilitiesMaster: any
  turn: number
  enemy?: boolean
  turnEnemy: any
}

const LayautButtons = ({Master,turn, DispatchHabilitiesMaster, enemy, turnEnemy} : LayautButtonsProps) => {


  const thisIsAnEnemy = 'rounded-bl-2xl rounded-tr-2xl rounded-br-none rounded-tl-none'

  return (
    <>
      <Button custom={enemy && thisIsAnEnemy} types={Master.hability1.types} disabled={enemy ? true :turnEnemy()} onClick={() => DispatchHabilitiesMaster()?.hability1()}
      >{Master.hability1.name}</Button>
      <Button custom={enemy && thisIsAnEnemy} types={Master.hability2.types} onClick={() => DispatchHabilitiesMaster()?.hability2()} disabled={enemy ? true :turnEnemy()}>{Master.hability2.name}</Button>
      <Button custom={enemy && thisIsAnEnemy} types={Master.hability3.types} onClick={() => DispatchHabilitiesMaster()?.hability3()} disabled={enemy? true :turnEnemy()}>{Master.hability3.name}</Button>
      <Button custom={enemy && thisIsAnEnemy} types={Master.hability4.types} onClick={() => DispatchHabilitiesMaster()?.hability4()} disabled={enemy? true :turnEnemy()}>{Master.hability4.name}</Button>
    </>
  )
}

export default LayautButtons