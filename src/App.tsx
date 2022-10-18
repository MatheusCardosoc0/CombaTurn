import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import Game from "./components/Game"
import Initial from "./components/Initial"
import Selection from "./components/Selection"
import { useStateContext } from "./context/UseContext"






function App() {
  

  const { show} = useStateContext()


  
  return (
    <div className="w-full h-screen">
      <div className='h-screen items-center flex justify-center'>
        {show == 'Initial' && <Initial />}
        {show == 'Game' && <Game />}
        {show == 'Selection' && <Selection />}
      </div>
      
    </div>
  )
}

export default App
