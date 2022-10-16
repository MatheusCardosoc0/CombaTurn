import { useEffect, useState } from "react"
import { incTurn } from "../functions/ModElements"


export const Lula = {
  name: 'Lula',
  life: 10,
  energy: 12,
  hability1: {name :'cachacinha' , cost: 3, types: 'heal'},
  hability2:  {name :'Roubo' , cost: 5, types: 'heal'},
  hability3:  {name :'Honestidade' , cost: 2, types: 'suport'}, 
  hability4:  {name :'Aumentar imposto' , cost: 2, types: 'damage'}
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
    if(readjustmentEnergy(Lula.hability1.cost)){
      LifePointsMy((life: number) => life + 50 + Corrupção) 
    }
  }

  function Atack2(){ 
    if(readjustmentEnergy(Lula.hability2.cost)){
      incTurn(SetTurn) 
    }
  }

  function Atack3(){
    if(readjustmentEnergy(Lula.hability3.cost)){
      setCorrupção((Corrupção: number) => Corrupção + 20) 
    }
  }

  function Atack4(){
    if(readjustmentEnergy(Lula.hability4.cost)){
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