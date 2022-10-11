import { Hero } from "../../context/UseContext"
import { incTurn } from "../functions/ModElements"


export const Bolsonaro = {
  name: 'Bolsonaro',
  life: 300,
  habilityName1: 'Cloroquina',
  habilityName2: 'Historico de atleta',
  habilityName3: 'Imbrochavel',
  habilityName4: 'Mitagem',
}

export const StatsBolsonaro = (Master: Hero, turn: any, setMaster: any) =>{
  function atack1(){
    console.log('ee')
    incTurn(turn)
  }

  function atack2(){
    console.log('err')
    incTurn(turn)
  }
  function atack3(){
    console.log('tutu')
    incTurn(turn)
  }
  function atack4(){
    incTurn(turn)
  }



  const HabiltiesBolso = {
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  return {HabiltiesBolso}
}