import React, { createContext, ReactNode, useContext, useState } from "react"

type userContextprops = {
  children: ReactNode
}

export type Hero = {
  name: string
  life: number
  habilityName1: string
  habilityName2: string
  habilityName3: string
  habilityName4: string
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
    life: 0,
    habilityName1: '',
    habilityName2: '',
    habilityName3: '',
    habilityName4: '',
  },
  Enemy: {
    name: '',
    life: 0,
    habilityName1: '',
    habilityName2: '',
    habilityName3: '',
    habilityName4: '',
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
