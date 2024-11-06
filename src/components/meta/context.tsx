'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from "@/components/ui/data"

export const AccountContext = createContext()

const AccountProvider = ({children} : {children : ReactNode}) => {
    const [user, setUser] = useState(null)

    const login = (account : Account) => {
        setUser(account)
    }

    const logout = () => {
        setUser(null)
    }

    const context = {
        user,
        setUser,
        login,
        logout
    }

    return (
        <AccountContext.Provider value={context}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider

// interface AccountContextType {
//     user: Account | null
//     setUser: (user: Account | null) => void
// }

// export const AccountContext = createContext<AccountContextType | undefined>(undefined)

// export function AccountProvider({children} : {children : ReactNode}) {
//   const [user, setUser] = useState<Account, null>(null)

//   return (
//     <AccountContext.Provider value={{user, setUser}}>
//       {children}
//     </AccountContext.Provider>
//   )
// }

// export function useAccount() {
//     const context = useContext(AccountContext)
//     return context
// }
