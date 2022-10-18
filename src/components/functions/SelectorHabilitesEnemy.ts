import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesEnemy = (Master: Hero, Turn: any, LifePointsMy: any, LifePointsEnemy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any) => {

  const {HabiltiesBolso} = StatsBolsonaro(LifePointsEnemy, Turn, LifePointsMy,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction)
  const {HabiltiesLula} = StatsLula(LifePointsEnemy, Turn, LifePointsMy, turnCurrent,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction )


  function DispatchHabilitiesEnemy(){
    if(Master.name === 'Lula'){
      return HabiltiesLula
    }
    else if(Master.name === 'Bolsonaro'){
      return HabiltiesBolso
    }
  }



  return { DispatchHabilitiesEnemy}
}

export default SelectorHabilitiesEnemy