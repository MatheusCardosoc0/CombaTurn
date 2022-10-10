import React from 'react'
import { useStateContext } from '../context/UseContext'

const Game = () => {

  const {Player, Enemy} = useStateContext()

  return (
    <div>
      Game
      <p>{Player.name}</p>
      <p>{Enemy.name}</p>
    </div>
  )
}

export default Game