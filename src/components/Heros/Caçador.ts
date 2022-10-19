import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Hero } from "../../context/UseContext"
import ModElements, { ActionDetails, incTurn } from "../functions/ModElements"
import { getRandomArbitrary } from "../Selection"


export const Caçador = {
  avatar: 'http://pm1.narvii.com/6774/9dbcdac27c8e3290cbc33538b5403656da667915v2_00.jpg',
  name: 'Caçador',
  life: 300,
  energy: 15,
  hability1: {name :'Golpe de adaga' , cost: 3, types: 'damage'},
  hability2:  {name :'Poção de cura' , cost: 4, types: 'heal'},
  hability3:  {name :'Armadilha' , cost: 3, types: 'suport'}, 
  hability4:  {name :'Tiro neutralizador' , cost: 3, types: 'damage'}
}


export const StatsCaçador = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any) =>{

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
      ActionDetails(description,setActionTurn)
      incBoosted()
      return true
    }
  }

  let action;

  

  function atack1(){ 
    action = 'uhre'  
    if(readjustmentEnergy(Caçador.hability1.cost, action)){
      setEmemyWeakening((inc : number) => inc + 0.3)
      AlertsResultsAction(Caçador.hability1.types)
      toast.success('+' + Number(EnemyWeakening ))
    }    
  }

  function atack2(){
    action = 'uhre'  
    if(readjustmentEnergy(Caçador.hability2.cost, action)){
      LifePointsMy((life: number) => life + 150 + valueBoosted)
      setAtletic(true)
    }
    
  }
  function atack3(){
    action = 'uhre'  
    if(readjustmentEnergy(Caçador.hability3.cost, action)){
      LifePointsEnemy((life: number) => life - 60 * EnemyWeakening)
    }
  }
  function atack4(){
    action = 'uhre'  
    if(readjustmentEnergy(Caçador.hability4.cost, action)){
      LifePointsEnemy((life: number) => life - DamageAtack4 * EnemyWeakening)
    }
    
  }



  const HabiltiesCaçador = {
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  return {HabiltiesCaçador}
}