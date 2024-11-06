'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from "@/components/ui/data"

interface AccountContextType {
    user: Account | null
    setUser: (user: Account | null) => void
}

export const AccountContext = createContext<AccountContextType | undefined>(undefined)

export function AccountProvider({children} : {children : ReactNode}) {
  const [user, setUser] = useState<Account, null>(null)

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
