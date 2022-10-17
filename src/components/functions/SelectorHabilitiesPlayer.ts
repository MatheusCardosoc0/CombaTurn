import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesPlayer = (Master: Hero, Turn: any, setMaster: any, LifePoints: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any) => {

  const {HabiltiesBolso} = StatsBolsonaro(LifePoints, Turn, setMaster,  setMyEnergy, MyEnergy, setActionTurn)
  const {HabiltiesLula} = StatsLula(LifePoints, Turn, setMaster, turnCurrent,  setMyEnergy, MyEnergy, setActionTurn)


  function DispatchHabilitiesPlayer(){
    if(Master.name === 'Lula'){
      return HabiltiesLula
    }
    else if(Master.name === 'Bolsonaro'){
      return HabiltiesBolso
    }
  }



  return { DispatchHabilitiesPlayer}
}

export default SelectorHabilitiesPlayer