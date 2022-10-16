import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string
  types?: string
  custom?: string
}

const Button = ({children, types, custom, ...props} : ButtonProps) => {

  const Heal = 'bg-gradient-to-tr from-green-400 to-teal-500'
  const Damage = 'bg-gradient-to-tr from-red-400 to-orange-500'
  const Suport = 'bg-gradient-to-tr from-purple-400 to-violet-500'

  const Custom = custom

  function TypeColor(){
    if(types == 'heal'){
      return Heal
    }
    if(types == 'damage'){
      return Damage
    }
    if(types == 'suport'){
      return Suport
    }
  }


  return (
    <button {...props} className={`py-2 px-1  rounded-tl-2xl ${types?TypeColor() : Custom} rounded-br-2xl text-white font-bold textShadow hover:scale-105 drop-shadow-[-2px_2px_2px_rgba(45,16,16,30.35)]`}
    >{children}</button>
  )
}

export default Button