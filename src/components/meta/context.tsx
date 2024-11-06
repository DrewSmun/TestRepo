'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from "@/components/ui/data"

interface UserContextType {
    user: Account | null
    setUser: (user: Account | null) => void
}

export const AccountContext = createContext()

export function AccountProvider({children} : {children : ReactNode}) {
  const [user, setUser] = useState(null)

  return (
    <AccountContext.Provider value={{user, setUser}}>
      {children}
    </AccountContext.Provider>
  )
}

export function useAccount() {
    const context = useContext(AccountContext)
    return context
}
