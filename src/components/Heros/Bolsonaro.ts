import { useEffect, useState } from "react"
import { Hero } from "../../context/UseContext"
import ModElements, { incTurn } from "../functions/ModElements"
import { getRandomArbitrary } from "../Selection"


export const Bolsonaro = {
  name: 'Bolsonaro',
  life: 300,
  energy: 15,
  habilityName1: 'Cloroquina',
  habilityCost1: 3,
  habilityName2: 'Historico de atleta',
  habilityCost2: 2,
  habilityName3: 'Imbrochavel',
  habilityCost3: 5,
  habilityName4: 'Porte de armas',
  habilityCost4: 8,
}

export const StatsBolsonaro = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, setMyEnergy: any, MyEnergy: number) =>{

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
  

  const Damage4 = (valueBoosted / 2) * getRandomArbitrary(1,3)

  const DamageAtack4 = Damage4 + Damage4 + Damage4

  function readjustmentEnergy(value: number){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
      if(atletic == true){
        reduceEffectAtletic()
      }
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      incBoosted()
      console.log(EnemyWeakening)
      return true
    }
  }

  

  function atack1(){   
    if(readjustmentEnergy(Bolsonaro.habilityCost1)){
      setEmemyWeakening((inc : number) => inc + 0.3)
    }    
  }

  function atack2(){
    if(readjustmentEnergy(Bolsonaro.habilityCost2)){
      LifePointsMy((life: number) => life + 150 + valueBoosted)
      setAtletic(true)
    }
    
  }
  function atack3(){
    if(readjustmentEnergy(Bolsonaro.habilityCost3)){
      LifePointsEnemy((life: number) => life - 60 * EnemyWeakening)
    }
  }
  function atack4(){
    if(readjustmentEnergy(Bolsonaro.habilityCost4)){
      LifePointsEnemy((life: number) => life - DamageAtack4 * EnemyWeakening)
    }
    
  }



  const HabiltiesBolso = {
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  return {HabiltiesBolso}
}