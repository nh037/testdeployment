"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()
const Context = ({children}) => {
    const username ="nitish hans"
  return (
    <div>
      <MyContext.Provider value={username}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default Context
