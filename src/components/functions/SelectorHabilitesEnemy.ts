import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesEnemy = (Master: Hero, Turn: any, setMaster: any) => {

  const {HabiltiesBolso} = StatsBolsonaro(Master, Turn, setMaster)
  const {HabiltiesLula} = StatsLula(Master, Turn, setMaster)


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