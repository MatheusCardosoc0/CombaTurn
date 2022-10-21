import React from 'react'
import { Hero } from '../../../context/UseContext'
import { getRandomArbitrary } from '../../Selection'

const EnemyInteligenseFunction = (Enemy: Hero, setEnergyPointsEnemy: any, RecargeEnergyAndPassTurn: any, EnergyPointsEnemy: any, DispatchHabilitiesEnemy: any) => {


  function EnemyInteligense() {
    const ArrayCost = new Array()
    ArrayCost.push(Enemy.hability1.cost, Enemy.hability2.cost, Enemy.hability3.cost, Enemy.hability4.cost)
    const NewArrayCost = ArrayCost.filter(hability => hability < EnergyPointsEnemy)

    const random = getRandomArbitrary(0, NewArrayCost.length)

    if (EnergyPointsEnemy < (Enemy.energy / 3)) {
      RecargeEnergyAndPassTurn(setEnergyPointsEnemy, Enemy, EnergyPointsEnemy)
    }

    else if (NewArrayCost[random] === Enemy.hability1.cost) {
      DispatchHabilitiesEnemy()?.hability1()
    }
    else if (NewArrayCost[random] === Enemy.hability2.cost) {
      DispatchHabilitiesEnemy()?.hability2()
    }
    else if (NewArrayCost[random] === Enemy.hability3.cost) {
      DispatchHabilitiesEnemy()?.hability3()
    }
    else if (NewArrayCost[random] === Enemy.hability4.cost) {
      DispatchHabilitiesEnemy()?.hability4()
    } else {
      RecargeEnergyAndPassTurn(setEnergyPointsEnemy, Enemy, EnergyPointsEnemy)
    }

  }

  return {EnemyInteligense}
}

export default EnemyInteligenseFunction