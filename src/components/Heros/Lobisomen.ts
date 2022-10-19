import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ModElements, { ActionDetails, incTurn} from "../functions/ModElements"


export const Lobisomen = {
  avatar: 'https://static.todamateria.com.br/upload/lo/bi/lobisomem-cke.jpg',
  name: 'Lobisomen',
  life: 400,
  energy: 15,
  hability1: {name :'Uivo estrondoso' , cost: 4, types: 'suport'},
  hability2:  {name :'Mordida' , cost: 5, types: 'damage'},
  hability3:  {name :'Golpe de garras' , cost: 4, types: 'damage'}, 
  hability4:  {name :'Convocar matilha' , cost: 8, types: 'suport'}
}

export const StatsLobisomen = (LifePointsEnemy: any, SetTurn: any, LifePointsMy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any) =>{

  const [Medo, setMedo] = useState(1)
  const [impost, setImpost] = useState(0)
  const [impostCharged, setImpostCharged] = useState(false)


  function readjustmentEnergy(value: number, description: string){
    if(MyEnergy < value){
      alert(`Essa habilidade exige ${value} de energia para ser executada`)
      return false
    } else {
      setMyEnergy((prevEnergy: number) => prevEnergy - value)
      incTurn(SetTurn)
      ActionDetails(description, setActionTurn)
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
      toast.success('-' + (60 * Medo))
      LifePointsMy((life: number) => life + 10 * Medo )
      toast.success('+' + (15 * Medo))
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
    action = "Lobisomen usa de sua honestidade para ter mais poder"
    if(readjustmentEnergy(Lobisomen.hability4.cost, action)){
      if(!impostCharged){
        setImpost((prevImpost : number) => prevImpost + 40)
        setImpostCharged(true)
      }
      else{
        setImpost((prevImpost : number) => prevImpost + (Medo / 3))
        setMedo((Medo: number) => Medo + 10)
      } 
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