import { Hero } from '../../context/UseContext'
import { StatsCaçador } from '../Heros/Caçador'
import { StatsLobisomen } from '../Heros/Lobisomen'

const SelectorHabilitiesPlayer = (Master: Hero, Turn: any, setMaster: any, LifePoints: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any) => {

  const {HabiltiesCaçador} = StatsCaçador(LifePoints, Turn, setMaster, turnCurrent,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction)
  const {HabiltiesLobisomen} = StatsLobisomen(LifePoints, Turn, setMaster, turnCurrent,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction)

  

  function DispatchHabilitiesPlayer(){
    if(Master.name === 'Lobisomen'){
      return HabiltiesLobisomen
    }
    else if(Master.name === 'Caçador'){
      return HabiltiesCaçador
    }
  }



  return { DispatchHabilitiesPlayer}
}

export default SelectorHabilitiesPlayer