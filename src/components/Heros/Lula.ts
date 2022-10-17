import { useEffect, useState } from "react"
import { incTurn } from "../functions/ModElements"


export const Lula = {
  name: 'Lula',
  life: 300,
  energy: 12,
  hability1: {name :'cachacinha' , cost: 3, types: 'heal'},
  hability2:  {name :'Roubo' , cost: 5, types: 'heal'},
  hability3:  {name :'Honestidade' , cost: 2, types: 'suport'}, 
  hability4:  {name :'Aumentar imposto' , cost: 2, types: 'damage'}
}

export const StatsLula = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any) =>{

  const [Corrupção, setCorrupção] = useState(0)
  const [impost, setImpost] = useState(0)
  const [impostCharged, setImpostCharged] = useState(false)


  function readjustmentEnergy(value: number, description: string){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      setActionTurn(description)
      setTimeout(() => {
        setActionTurn("")
      }, 2000); 
      return true
    }
  }

  useEffect(() => {
    //precisa saber se o player joga primeiro ou não
    if(turnCurrent % 2 != 0 && impostCharged == true){
      LifePointsEnemy((life: number) => life - impost)
    }
  },[turnCurrent])

  let action;


  function Atack1(){
    action = "Lula toma uma doze de 51 para recuperar a vida"
    if(readjustmentEnergy(Lula.hability1.cost, action)){
      LifePointsMy((life: number) => life + 50 + Corrupção)
      
    }
  }

  function Atack2(){
    action = "Lula rouba o turno do enemigo" 
    if(readjustmentEnergy(Lula.hability2.cost, action)){
      incTurn(SetTurn) 
    }
  }

  function Atack3(){
    action = "Lula usa de sua honestidade para ter mais poder"
    if(readjustmentEnergy(Lula.hability3.cost, action)){
      setCorrupção((Corrupção: number) => Corrupção + 20) 
    }
  }

  function Atack4(){
    action = "Lula usa de sua honestidade para ter mais poder"
    if(readjustmentEnergy(Lula.hability4.cost, action)){
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