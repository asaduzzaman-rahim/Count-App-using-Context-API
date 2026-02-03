import React, { createContext, useState } from 'react'

export const counterContext = createContext()

const MainContext = ({children}) => {
    const [count, setCount] = useState(0)
    let globalOBJ = {count, setCount}

  return (
    <counterContext.Provider value={globalOBJ}>
      {children}
    </counterContext.Provider>
  )
}

export default MainContext
