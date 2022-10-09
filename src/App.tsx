import { useEffect, useState } from "react"
import Game from "./components/Game"
import Initial from "./components/Initial"
import Selection from "./components/Selection"
import { useStateContext } from "./context/UseContext"

function App() {
  

  const { Enemy, Player, setEnemy, setPlayer, show } = useStateContext()
  

  /*function atack() { console.log('eae') }
  function atack2() { }
  function atack3() { }
  function atack4() { }

  const atri = {
    name: 'jojo',
    hability1: () =>atack(),
    hability2: atack2,
    hability3: atack3,
    hability4: atack4,
  }*/

  return (
    <div>
      <div className='h-screen items-center flex justify-center'>
        {show == 'Initial' && <Initial />}
        {show == 'Game' && <Game />}
        {show == 'Selection' && <Selection />}
      </div>
      
    </div>
  )
}

export default App
