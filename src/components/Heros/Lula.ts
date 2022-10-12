import { useEffect, useState } from "react"
import { incTurn } from "../functions/ModElements"


export const Lula = {
  name: 'Lula',
  life: 350,
  habilityName1: 'Cachacinha',
  habilityName2: 'Roubo',
  habilityName3: 'O mais Honesto',
  habilityName4: 'Aumentar imposto',
}

export const StatsLula = (LifePointsEnemy: any, setTurn: any, LifePointsMy: any, turnCurrent: number) =>{

  const [Poder, setPoder] = useState(0)
  const [impost, setImpost] = useState(0)
  const [impostCharged, setImpostCharged] = useState(false)


  function Atack1(){
    LifePointsMy((life: number) => life + 50 + Poder) 
    incTurn(setTurn)
  }

  function Atack2(){ 
    incTurn(setTurn, 1)
    /*if(impostCharged){
      LifePointsEnemy((life: number) => life - impost)
    }*/
  }

  function Atack3(){ 
    setPoder((poder: number) => poder + 20)
    incTurn(setTurn)
  }

  useEffect(() => {
    //precisa saber se o player joga primeiro ou não
    if(turnCurrent % 2 != 0 && impostCharged == true){
      LifePointsEnemy((life: number) => life - impost)
    }
  },[turnCurrent])

  function Atack4(){
    if(!impostCharged){
      setImpost((prevImpost : number) => prevImpost + 40)
      setImpostCharged(true)
    }
    else{
      setImpost((prevImpost : number) => prevImpost + (Poder / 3))
      setPoder((poder: number) => poder + 10)
    }
    
    incTurn(setTurn)
  }



  const HabiltiesLula = {
    hability1: Atack1,
    hability2: Atack2,
    hability3: Atack3,
    hability4: Atack4,
  }

  return {HabiltiesLula}
}