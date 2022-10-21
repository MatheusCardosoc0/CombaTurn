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
  hability1: {name :'Espada amaldiçoada' , cost: 4, types: 'special'},
  hability2:  {name :'Poção de cura' , cost: 7, types: 'heal'},
  hability3:  {name :'Armadilha amaldiçoada' , cost: 6, types: 'special'}, 
  hability4:  {name :'Ocultação nas sombras' , cost: 5, types: 'suport'}
}


export const StatsCaçador = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any, shadow: any) =>{

  const [Maldição, setMaldição] = useState(0)


  
  function readjustmentEnergy(value: number, description : string){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {    
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      ActionDetails(description,setActionTurn)
      return true
    }
  }


  useEffect(() => {
    if(Maldição === 3){
      LifePointsEnemy((life: number) => life - 150)
      setMaldição(0)
      AlertsResultsAction(Caçador.hability3.types)
      toast.success('-' + 150)  
      toast.success('!!!' + 3) 
    }
  },[Maldição])

  let action;

  

  function atack1(){ 
    action = 'O caçador desfere um golpe com sua espada almadiçoada'  
    if(readjustmentEnergy(Caçador.hability1.cost, action)){
      LifePointsEnemy((life: number) => life - 40)
      setMaldição((maldição: number) => maldição + 1)
      AlertsResultsAction(Caçador.hability1.types)
      toast.success('-' + 40)  
      toast.success('!!!' + Maldição)  
    }    
  }

  function atack2(){
    action = 'O caçador toma uma poção para aumentar sua vitalidade'  
    if(readjustmentEnergy(Caçador.hability2.cost, action)){
      LifePointsMy((life: number) => life + 80)
      AlertsResultsAction(Caçador.hability2.types)
      toast.success('+' + 80)  
    }
    
  }
  function atack3(){
    action = 'O caçador convoca correntes amaldiçoadas que prendem o inimigo, ganhando um turno extra.'  
    if(readjustmentEnergy(Caçador.hability3.cost, action)){
      incTurn(SetTurn)
      LifePointsEnemy((life : number) => life - 20)
      setMaldição((maldiacao : number) => maldiacao + 1)
      AlertsResultsAction(Caçador.hability3.types)
      toast.success('-' + 20)  
      toast.success('!!!' + Maldição)  
    }
  }
  function atack4(){
    action = 'O caçador se esconde nas sombras evitando ataques'  
    if(readjustmentEnergy(Caçador.hability4.cost, action)){
      shadow(true)
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