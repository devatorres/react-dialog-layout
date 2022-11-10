import { createContext, useState } from 'react'

const StateContext = createContext(undefined)

export const StateContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <StateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
