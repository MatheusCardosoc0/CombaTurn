import React from 'react'
import { toast } from 'react-toastify'

export function incTurn(turn: any, increment: number = 0){
  return turn((prevInc: number) => prevInc + 1 + increment)
}

export function ActionDetails(description: string, setActionTurn : any){
  setActionTurn(description)
  setTimeout(() => {
    setActionTurn("")
  }, 2000);
}

const ModElements = () => {
  

  return {
    
  }
}

export default ModElements