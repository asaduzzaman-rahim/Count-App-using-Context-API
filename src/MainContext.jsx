import React, { createContext, useState } from 'react'

export const counterContext = createContext()

const MainContext = ({children}) => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState(false)



    let globalOBJ = {count, setCount, color, setColor}

  return (
    <counterContext.Provider value={globalOBJ}>
      {children}
    </counterContext.Provider>
  )
}

export default MainContext
