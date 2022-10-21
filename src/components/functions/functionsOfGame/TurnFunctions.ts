import React from 'react'
import { toast } from 'react-toastify';
import { Hero } from '../../../context/UseContext';

const TurnFunctions = (TurnEnemyParOrImppar: any, lifePointsEnemy: number, EnemyInteligense: any, ShowMatilha: boolean, Player: Hero, TurnPlayerParOrImppar: any, setLifePointsEnemy: any, setalertResultsAction: any, Enemy: Hero, setLifePointsPlayer: any, lifePointsPlayer: number, EnergyPointsPlayer: number, setEnergyPointsPlayer: any, EnergyPointsEnemy: number, setEnergyPointsEnemy: any) => {

  function actionEnemy(){
    if (TurnEnemyParOrImppar() && lifePointsEnemy >= 0 && lifePointsPlayer >= 0) {
      setTimeout(() => {
        EnemyInteligense()
      }, 2000);
    }
    else {
      return
    }
  }


  function ifOnMatilha(){
    if(ShowMatilha && Player.name === 'Lobisomen'){
      if(TurnPlayerParOrImppar()){
        setLifePointsEnemy(lifePointsEnemy - 30)
        setalertResultsAction('damage')
        toast.success('lobo: -' + 30)
      }
    }
  
    else if(ShowMatilha && Enemy.name === 'Lobisomen'){
      if(TurnEnemyParOrImppar()){
        setLifePointsPlayer(lifePointsPlayer - 30)
        setalertResultsAction('damage')
        toast.success('-' + 30)
      }
    }
  }


  function EnergyTurnRecharge(){
    if ((EnergyPointsPlayer + 2) > Player.energy) {
      setEnergyPointsPlayer(Player.energy)
    } else {
      setEnergyPointsPlayer((prevEnergy: number) => prevEnergy + 1)
    }
    if ((EnergyPointsEnemy + 2) > Enemy.energy) {
      setEnergyPointsEnemy(Enemy.energy)
    } else {
      setEnergyPointsEnemy((prevEnergy: number) => prevEnergy + 1)
    }
  }



  return {EnergyTurnRecharge, ifOnMatilha, actionEnemy}
}

export default TurnFunctions