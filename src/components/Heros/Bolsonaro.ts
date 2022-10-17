import { useEffect, useState } from "react"
import { Hero } from "../../context/UseContext"
import ModElements, { incTurn } from "../functions/ModElements"
import { getRandomArbitrary } from "../Selection"


export const Bolsonaro = {
  name: 'Bolsonaro',
  life: 300,
  energy: 15,
  hability1: {name :'Cloroquina' , cost: 3, types: 'suport'},
  hability2:  {name :'Historico de atleta' , cost: 3, types: 'heal'},
  hability3:  {name :'Imbrochavel' , cost: 5, types: 'damage'}, 
  hability4:  {name :'Porte de armas' , cost: 8, types: 'damage'}
}

export const StatsBolsonaro = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, setMyEnergy: any, MyEnergy: number, setActionTurn: any) =>{

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

  function readjustmentEnergy(value: number, description : string){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
      if(atletic == true){
        reduceEffectAtletic()
      }
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      setActionTurn(description)
      setTimeout(() => {
        setActionTurn("")
      }, 2000);
      incBoosted()
      return true
    }
  }

  let action;

  

  function atack1(){ 
    action = 'uhre'  
    if(readjustmentEnergy(Bolsonaro.hability1.cost, action)){
      setEmemyWeakening((inc : number) => inc + 0.3)
    }    
  }

  function atack2(){
    action = 'uhre'  
    if(readjustmentEnergy(Bolsonaro.hability2.cost, action)){
      LifePointsMy((life: number) => life + 150 + valueBoosted)
      setAtletic(true)
    }
    
  }
  function atack3(){
    action = 'uhre'  
    if(readjustmentEnergy(Bolsonaro.hability3.cost, action)){
      LifePointsEnemy((life: number) => life - 60 * EnemyWeakening)
    }
  }
  function atack4(){
    action = 'uhre'  
    if(readjustmentEnergy(Bolsonaro.hability4.cost, action)){
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