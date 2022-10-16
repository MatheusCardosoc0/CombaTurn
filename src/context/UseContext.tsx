import React, { createContext, ReactNode, useContext, useState } from "react"

type userContextprops = {
  children: ReactNode
}

export type HeroHability = {
  name: string
  cost: number
  types: string
}

export type Hero = {
  name: string
  life: number
  energy: number
  hability1: HeroHability
  hability2: HeroHability
  hability3: HeroHability
  hability4: HeroHability
}

type InitialValue = {
  Heros: Hero[]
  setHeros: any
  show: string
  setShow: any
  Player: Hero
  Enemy: Hero
  setEnemy: any
  setPlayer: any
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
    hability1: {name: '', cost: 0, types: ''},
    hability2: {name: '', cost: 0, types: ''},
    hability3: {name: '', cost: 0, types: ''},
    hability4: {name: '', cost: 0, types: ''},
  },
  Enemy: {
    name: '',
    life: 1,
    energy: 0,
    hability1: {name: '', cost: 0, types: ''},
    hability2: {name: '', cost: 0, types: ''},
    hability3: {name: '', cost: 0, types: ''},
    hability4: {name: '', cost: 0, types: ''},
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
