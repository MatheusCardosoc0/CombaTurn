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
  avatar: any
  name: string
  life: number
  energy: number
  hability1: HeroHability
  hability2: HeroHability
  hability3: HeroHability
  hability4: HeroHability
}

export type ResultActionAlertProps = {
  action: any
  type: string
}

type InitialValue = {
  alertResultsAction: string
  setalertResultsAction: any
  Heros: Hero[]
  setHeros: any
  show: string
  setShow: any
  Player: Hero
  Enemy: Hero
  setEnemy: any
  setPlayer: any
  MyTurn: number
  setMyTurn: any
}

const Initial = {
  alertResultsAction: '',
  setalertResultsAction: (value: ResultActionAlertProps ) => {},
  Heros: [],
  setHeros: '',
  MyTurn: 0,
  setMyTurn: '',
  show: 'Initial' || 'Selection' || 'Game',
  setShow: '',
  Player: {
    avatar: '',
    name: '',
    life: 1,
    energy: 0,
    hability1: {name: '', cost: 0, types: ''},
    hability2: {name: '', cost: 0, types: ''},
    hability3: {name: '', cost: 0, types: ''},
    hability4: {name: '', cost: 0, types: ''},
  },
  Enemy: {
    avatar: '',
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
  const [MyTurn, setMyTurn] = useState(Initial.MyTurn)
  const [alertResultsAction, setalertResultsAction] = useState('')



  return (
    <UserContext.Provider value={
      {
        Player, setPlayer, Enemy, setEnemy, show, setShow, Heros, setHeros, MyTurn, setMyTurn, alertResultsAction, setalertResultsAction
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export const useStateContext = () => useContext(UserContext)
