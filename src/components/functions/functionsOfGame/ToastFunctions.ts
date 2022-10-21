import React from 'react'

const ToastFunctions = (alertResultsAction: any, TurnEnemyParOrImppar: any) => {

  function modAlert() {
    if (alertResultsAction == 'heal') {
      return 'text-green-500'
    }
    else if (alertResultsAction == 'suport') {
      return 'text-purple-500'
    }
    else if (alertResultsAction == 'damage') {
      return 'text-red-500'
    }
    else if (alertResultsAction == 'special') {
      return 'text-yellow-500'
    }
  }

  function alertPosition() {
    if (TurnEnemyParOrImppar()) {
      if (alertResultsAction == 'damage' || alertResultsAction == 'special') {
        return 'top-right'
      } else {
        return 'top-left'
      }

    } else {
      if (alertResultsAction == 'damage' || alertResultsAction == 'special') {
        return 'top-left'
      } else {
        return 'top-right'
      }
    }
  }


  return {alertPosition, modAlert}
}

export default ToastFunctions