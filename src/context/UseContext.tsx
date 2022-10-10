import React, { createContext, ReactNode, useContext, useState } from "react"

type userContextprops = {
  children: ReactNode
}

export type Hero = {
  name: string
  hability1: () => void
  hability2: () => void
  hability3: () => void
  hability4: () => void
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
    hability1: () => { },
    hability2: () => { },
    hability3: () => { },
    hability4: () => { },
  },
  Enemy: {
    name: '',
    hability1: () => { },
    hability2: () => { },
    hability3: () => { },
    hability4: () => { },
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

  const Bolsonaro = {
    name: 'Bolsonaro',
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  function atack1() { console.log('eae') }
  function atack2() { }
  function atack3() { }
  function atack4() { }



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
