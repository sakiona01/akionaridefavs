import React from 'react'
import { UserContext } from '../providers/UserProvider'


export const useUser = () => {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    return alert('Must wrap components in UserProvider to use useUser hook')
  }
  return context
}