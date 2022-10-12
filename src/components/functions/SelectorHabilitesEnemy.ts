import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesEnemy = (Master: Hero, Turn: any, LifePointsMy: any, LifePointsEnemy: any, turnCurrent: number,  setMyEnergy: any, MyEnergy: number) => {

  const {HabiltiesBolso} = StatsBolsonaro(LifePointsEnemy, Turn, LifePointsMy,  setMyEnergy, MyEnergy)
  const {HabiltiesLula} = StatsLula(LifePointsEnemy, Turn, LifePointsMy, turnCurrent,  setMyEnergy, MyEnergy )


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