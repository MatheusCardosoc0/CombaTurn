import { incTurn } from "../functions/ModElements"


export const Lula = {
  name: 'Lula',
  life: 350,
  habilityName1: 'Cachacinha',
  habilityName2: 'Roubo',
  habilityName3: 'O mais Honesto',
  habilityName4: 'Aumentar imposto',
}

export const StatsLula = (props: any, turn: any, setMaster: any) =>{
  function atack1(){
    console.log('Lula1')
    incTurn(turn)
  }

  function atack2(){
    console.log('Lula2')
    incTurn(turn)
  }
  function atack3(){
    console.log('Lula3')
    incTurn(turn)
  }
  function atack4(){
    console.log('Lula4')
    incTurn(turn)
  }



  const HabiltiesLula = {
    hability1: atack1,
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }

  return {HabiltiesLula}
}