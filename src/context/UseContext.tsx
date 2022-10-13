import React, { createContext, ReactNode, useContext, useState } from "react"

type userContextprops = {
  children: ReactNode
}

export type Hero = {
  name: string
  life: number
  energy: number
  habilityName1: string
  habilityCost1: number
  habilityName2: string
  habilityCost2: number
  habilityName3: string
  habilityCost3: number
  habilityName4: string
  habilityCost4: number
}

type InitialValue = {
  Heros: Hero[]
  setHeros: any
  show: string
  setShow: any
  Player: Hero
  Enemy: Hero
  setEnemy: (player: Hero) => void
  setPlayer: (player: Hero) => void
}

const Initial = {
  Heros: [],
  setHeros: '',
  show: 'Initial' || 'Selection' || 'Game',
  setShow: '',
  Player: {
    name: '',
    life: 1,
    energy: 0,
    habilityName1: '',
    habilityCost1: 0,
    habilityName2: '',
    habilityCost2: 0,
    habilityName3: '',
    habilityCost3: 0,
    habilityName4: '',
    habilityCost4: 0,
  },
  Enemy: {
    name: '',
    life: 1,
    energy: 0,
    habilityName1: '',
    habilityCost1: 0,
    habilityName2: '',
    habilityCost2: 0,
    habilityName3: '',
    habilityCost3: 0,
    habilityName4: '',
    habilityCost4: 0,
  },
  setEnemy: (player: Hero) => { },
  setPlayer: (player: Hero) => { }
}


export const UserContext = createContext<InitialValue>(Initial)

export const UseContextProvider = ({ children }: userContextprops) => {
  /*const [State, setState] = useState<['Initial' | 'Selection' | 'Game']>(['Initial'])*/

  const [Player, setPlayer] = useState<Hero>(Initial.Player)
  const [Heros, setHeros] = useState<Hero[]>([])
  const [Enemy, setEnemy] = useState<Hero>(Initial.Enemy)
  const [show, setShow] = useState<'Initial' | 'Selection' | 'Game'>('Initial')



  return (
    <UserContext.Provider value={
      {
        Player, setPlayer, Enemy, setEnemy, show, setShow, Heros, setHeros
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export const useStateContext = () => useContext(UserContext)
