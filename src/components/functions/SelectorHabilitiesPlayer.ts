import { Hero } from '../../context/UseContext'
import { StatsBolsonaro } from '../Heros/Bolsonaro'
import { StatsLula } from '../Heros/Lula'

const SelectorHabilitiesPlayer = (Master: Hero, Turn: any, setMaster: any) => {

  const {HabiltiesBolso} = StatsBolsonaro(Master, Turn, setMaster)
  const {HabiltiesLula} = StatsLula(Master, Turn, setMaster)


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