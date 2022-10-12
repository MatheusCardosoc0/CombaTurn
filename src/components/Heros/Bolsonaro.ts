import { useEffect, useState } from "react"
import { Hero } from "../../context/UseContext"
import { incTurn } from "../functions/ModElements"
import { getRandomArbitrary } from "../Selection"


export const Bolsonaro = {
  name: 'Bolsonaro',
  life: 300,
  habilityName1: 'Cloroquina',
  habilityName2: 'Historico de atleta',
  habilityName3: 'Imbrochavel',
  habilityName4: 'Porte de armas',
}

export const StatsBolsonaro = (LifePointsEnemy: any, turn: any, LifePointsMy: any) =>{

  const [EnemyWeakening, setEmemyWeakening] = useState(1)
  const [atletic, setAtletic] = useState(false)
  const [countBoosted, setCountBoosted] = useState(0)

  const valueBoosted = countBoosted * 10


  function incBoosted(){
    return setCountBoosted((count: number) => count + 1)
  }

  function reduceEffectAtletic(){
    LifePointsMy((life: number) => life - 100)
    setAtletic(false)
  }

  const Damage4 = valueBoosted * getRandomArbitrary(1,3)

  const DamageAtack4 = Damage4 + Damage4 + Damage4

  

  function atack1(){   
    if(atletic){
      reduceEffectAtletic()
    }
    setEmemyWeakening((inc : number) => inc + 0.4)
    incBoosted()
    incTurn(turn)
  }

  function atack2(){
    if(atletic == true){
      reduceEffectAtletic()
    }
    LifePointsMy((life: number) => life + 150 + valueBoosted)
    incBoosted()
    setAtletic(true)
    incTurn(turn)
  }
  function atack3(){
    if(atletic == true){
      reduceEffectAtletic()
    }
    LifePointsEnemy((life: number) => life - 60 * EnemyWeakening)
    incBoosted()
    incTurn(turn)
  }
  function atack4(){
    incBoosted()
    if(atletic == true){
      reduceEffectAtletic()
    }
    LifePointsEnemy((life: number) => life - DamageAtack4 * EnemyWeakening)
    incTurn(turn)
  }



  const HabiltiesBolso = {
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  return {HabiltiesBolso}
}