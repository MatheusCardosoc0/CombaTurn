import React, { useEffect } from 'react'
import { useStateContext } from '../context/UseContext'
import Lula from './Heros/Lula'

const Selection = () => {

  const{Heros, setHeros} = useStateContext()

useEffect(() => {
  setHeros(Heros.push(Lula))
},[])

console.log(Heros)

  return (
    <div>
      <h2>Selecione com quem irá jogar</h2>
      <div>

      </div>
    </div>
  )
}

export default Selection