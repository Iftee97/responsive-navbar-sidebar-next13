import { createContext, useState } from "react"

export const AppContext = createContext()

export default function AppContextProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [count, setCount] = useState(0)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
        toggleSidebar,
        count,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
