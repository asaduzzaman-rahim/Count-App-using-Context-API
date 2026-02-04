import React, { useContext } from 'react'
import { counterContext } from '../MainContext'


const Container = ({children, className}) => {
    
    const {color} = useContext(counterContext)
  
    return (
    <div className={`${className} container max-w-[450px]  mx-auto text-center shadow-2xl ${!color ? "bg-white text-black" : "bg-[#23262e] text-white" } rounded-2xl`}>
      {children}
    </div>
  )
}

export default Container
