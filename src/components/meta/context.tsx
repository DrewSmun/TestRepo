'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from "@/components/ui/data"

interface AccountContextType {
    user: Account
    setUser: (user: Account) => void
}

const AccountContext = createContext<AccountContextType>({user: null, setUser: () => {}})

export function AccountProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<Account>()

    return (
        <AccountContext.Provider value={{ user, setUser }}>
            {children}
        </AccountContext.Provider>
    )
}

export function useUser() {
    const context = useContext(AccountContext)
    return context
}