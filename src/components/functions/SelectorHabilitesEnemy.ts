import { Hero } from '../../context/UseContext'
import { StatsCaçador } from '../Heros/Caçador'
import { StatsLobisomen } from '../Heros/Lobisomen'

const SelectorHabilitiesEnemy = (Master: Hero, Turn: any, setMaster: any, LifePoints: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any, setShowMatilha: any, Mylife: number, setShadow: any, shadow : boolean) => {

  const {HabiltiesCaçador} = StatsCaçador(LifePoints, Turn, setMaster, turnCurrent,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction, setShadow)
  const {HabiltiesLobisomen} = StatsLobisomen(LifePoints, Turn, setMaster,  setMyEnergy, MyEnergy, setActionTurn, AlertsResultsAction, setShowMatilha, setShadow, shadow)

  /*LifePointsEnemy: any, LifePointsMy: any, setMyEnergy: any, MyEnergy: number, setActionTurn: any, AlertsResultsAction: any, SetTurn: any*/


  /*
Enemy, setTurn, setLifePointsEnemy, setLifePointsPlayer, turn, setEnergyPointsEnemy, EnergyPointsEnemy, setActionTurn, setalertResultsAction*/


  function DispatchHabilitiesEnemy(){
    if(Master.name === 'Lobisomen'){
      return HabiltiesLobisomen
    }
    else if(Master.name === 'Caçador'){
      return HabiltiesCaçador
    }
  }



  return { DispatchHabilitiesEnemy}
}

export default SelectorHabilitiesEnemy