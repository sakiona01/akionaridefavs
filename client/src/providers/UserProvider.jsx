import React, {useState} from 'react'

export const UserContext = React.createContext(undefined)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const value = { user, setUser }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}