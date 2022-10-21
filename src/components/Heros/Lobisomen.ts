import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ModElements, { ActionDetails, incTurn} from "../functions/ModElements"


export const Lobisomen = {
  avatar: 'https://static.todamateria.com.br/upload/lo/bi/lobisomem-cke.jpg',
  name: 'Lobisomen',
  life: 400,
  energy: 20,
  hability1: {name :'Uivo estrondoso' , cost: 6, types: 'suport'},
  hability2:  {name :'Mordida' , cost: 4, types: 'damage'},
  hability3:  {name :'Golpe de garras' , cost: 5, types: 'damage'}, 
  hability4:  {name :'Convocar matilha' , cost: 15, types: 'suport'}
}

export const StatsLobisomen = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any, setShowMatilha: any,setShadow: any, shadow: boolean) =>{

  const [Medo, setMedo] = useState(1)


  function readjustmentEnergy(value: number, description: string){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
        if(shadow == true){
          AlertsResultsAction('suport')
          toast.success('Errou') 
          setMyEnergy((prevEnergy: number) => prevEnergy - value)
          ActionDetails("Por conta da fumaça não conseguiu fazer nada", setActionTurn)
          setShadow(false)
          incTurn(SetTurn)        
          return false   
        } else{
          setMyEnergy((prevEnergy: number) => prevEnergy - value)
          incTurn(SetTurn)
          ActionDetails(description, setActionTurn)
          return true
        }
    }
  }

  

  

  let action;


  function Atack1(){
    action = "O lobisomen uiva amendrotando seu adversário e deixando o mais sucetivel a dano"
    if(readjustmentEnergy(Lobisomen.hability1.cost, action)){
    
      setMedo((2))
      AlertsResultsAction(Lobisomen.hability1.types)
      toast.success('x' + 2)     
    }
  }

  function Atack2(){
    action = "Lobisomen morde seu inimigo e se recupera em 25% do dano" 
    if(readjustmentEnergy(Lobisomen.hability2.cost, action)){
      AlertsResultsAction(Lobisomen.hability2.types)
      LifePointsEnemy((life: number) => life - 40 * Medo )
      toast.success('-' + (40 * Medo))
      LifePointsMy((life: number) => life + 10 * Medo )
      toast.success('+' + (10 * Medo))
      setMedo(1)
    }
  }

  function Atack3(){
    action = "O lobisomen crava suas garras no inimigo causando dano moderado"
    if(readjustmentEnergy(Lobisomen.hability3.cost, action)){
      LifePointsEnemy((life: number) => life - 120 * Medo)
      AlertsResultsAction(Lobisomen.hability3.types)
      toast.success('-' + (120 * Medo))
      setMedo(1)
    }
  }

  function Atack4(){
    action = "O Lobisomen conjura lobos para ajuda lo"
    if(readjustmentEnergy(Lobisomen.hability4.cost, action)){
        setShowMatilha(true)
    } 
  }



  const HabiltiesLobisomen = {
    hability1: Atack1,
    hability2: Atack2,
    hability3: Atack3,
    hability4: Atack4,
  }

  return {HabiltiesLobisomen}
}