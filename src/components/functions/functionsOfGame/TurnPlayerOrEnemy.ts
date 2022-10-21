const TurnPlayerOrEnemy = (MyTurn: number, turn: number) => {

  function TurnEnemyParOrImppar() {
    if (MyTurn === 1) {
      return turn % 2 != 0
    } else {
      if (turn > 0) {
        return turn % 2 == 0
      }
      else {
        return false
      }
    }
  }

  function TurnPlayerParOrImppar() {
    if (MyTurn === 2) {
      return turn % 2 == 0
    } else {
      if (turn > 0) {
        return turn % 2 != 0
      }
      else {
        return false
      }
    }
  }



  return {
    TurnEnemyParOrImppar,
    TurnPlayerParOrImppar
  }
}

export default TurnPlayerOrEnemy