import React from 'react'

const ModElements = () => {

  function incTurn(turn: any, increment: number = 0){
    return turn((prevInc: number) => prevInc + 1 + increment)
  }

  return {incTurn}
}

export default ModElements