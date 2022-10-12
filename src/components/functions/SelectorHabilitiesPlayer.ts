import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesPlayer = (Master: Hero, Turn: any, setMaster: any, LifePoints: any, turnCurrent: number) => {

  const {HabiltiesBolso} = StatsBolsonaro(LifePoints, Turn, setMaster)
  const {HabiltiesLula} = StatsLula(LifePoints, Turn, setMaster, turnCurrent)


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