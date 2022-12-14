import React, { useState } from 'react'
import { CaretCircleDoubleRight } from 'phosphor-react'
import { useStateContext } from '../context/UseContext'
import { Caçador } from './Heros/Caçador'
import { Lobisomen } from './Heros/Lobisomen'

const Initial = () => {

  const [Mouse, setMouse] = useState(false)
  const { setShow, Heros, setHeros } = useStateContext()

  const ButtonEventClass = 'flex items-center gap-4'
  const ButtonClass = 'p-2 w-full justify-center mx-auto rounded-md text-4xl font-bold text-slate-200 hover:bg-orange-500'

  function PushHerosAndSelectionPage() {
    setShow('Selection')
    setHeros([...Heros, Lobisomen, Caçador])
  }


  return (
    <div className='bg-gradient-to-tr from-slate-600 to-gray-900 w-full h-screen flex justify-center items-center'>
      <div className='px-4 py-6  rounded-lg flex flex-col gap-20'>
        <h1 className='font-bold text-5xl bg-gradient-to-r bg-clip-text text-transparent from-yellow-300  to-red-700'>Confronto RPG</h1>

        <main className='flex flex-col justify-center gap-4'>

          <button
            onMouseEnter={() => setMouse(true)}
            onMouseOut={() => setMouse(false)}
            className={`${ButtonClass} ${!Mouse && ButtonEventClass}`}
            onClick={() => PushHerosAndSelectionPage()}>
            {!Mouse && <CaretCircleDoubleRight className='text-orange-500' />}
            Jogar</button>

          <button
            onMouseEnter={() => setMouse(!true)}
            onMouseOut={() => setMouse(!false)}
            className={`${ButtonClass} ${Mouse && ButtonEventClass}`}>{Mouse && <CaretCircleDoubleRight className='text-orange-500' />}
            Opções</button>

        </main>
      </div>
    </div>
  )
}

export default Initial