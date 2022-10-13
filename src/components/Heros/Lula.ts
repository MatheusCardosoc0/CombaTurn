import { useEffect, useState } from "react"
import { incTurn } from "../functions/ModElements"


export const Lula = {
  name: 'Lula',
  life: 350,
  energy: 12,
  habilityName1: 'Cachacinha',
  habilityCost1: 3,
  habilityName2: 'Roubo',
  habilityCost2: 6,
  habilityName3: 'O mais Honesto',
  habilityCost3: 2,
  habilityName4: 'Aumentar imposto',
  habilityCost4: 3,
}

export const StatsLula = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number) =>{

  const [Corrupção, setCorrupção] = useState(0)
  const [impost, setImpost] = useState(0)
  const [impostCharged, setImpostCharged] = useState(false)


  function readjustmentEnergy(value: number){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      return true
    }
  }

  useEffect(() => {
    //precisa saber se o player joga primeiro ou não
    if(turnCurrent % 2 != 0 && impostCharged == true){
      LifePointsEnemy((life: number) => life - impost)
    }
  },[turnCurrent])


  function Atack1(){
    if(readjustmentEnergy(Lula.habilityCost1)){
      LifePointsMy((life: number) => life + 50 + Corrupção) 
    }
  }

  function Atack2(){ 
    if(readjustmentEnergy(Lula.habilityCost2)){
      incTurn(SetTurn) 
    }
  }

  function Atack3(){
    if(readjustmentEnergy(Lula.habilityCost3)){
      setCorrupção((Corrupção: number) => Corrupção + 20) 
    }
  }

  function Atack4(){
    if(readjustmentEnergy(Lula.habilityCost4)){
      if(!impostCharged){
        setImpost((prevImpost : number) => prevImpost + 40)
        setImpostCharged(true)
      }
      else{
        setImpost((prevImpost : number) => prevImpost + (Corrupção / 3))
        setCorrupção((Corrupção: number) => Corrupção + 10)
      } 
    } 
  }



  const HabiltiesLula = {
    hability1: Atack1,
    hability2: Atack2,
    hability3: Atack3,
    hability4: Atack4,
  }

  return {HabiltiesLula}
}