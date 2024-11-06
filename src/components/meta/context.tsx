'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from "@/components/ui/data"

interface AccountContextType {
    user: Account | null
    setUser: (user: Account | null) => void
}

const AccountContext = createContext<AccountContextType | undefined>(undefined)

export function AccountProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<Account | null>(null)

    return (
        <AccountContext.Provider value={{ user, setUser }}>
            {children}
        </AccountContext.Provider>
    )
}

export function useUser() {
    const context = useContext(AccountContext)
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context
}

// export const AccountContext = createContext({
//     user: ,
//     setUser: (user : Account) => void
// })

// const AccountProvider = ({children} : {children : ReactNode}) => {
//     const [user, setUser] = useState(null)

//     const login = (account : Account) => {
//         setUser(account)
//     }

//     const logout = () => {
//         setUser(null)
//     }

//     const context = {
//         user,
//         setUser,
//         login,
//         logout
//     }

//     return (
//         <AccountContext.Provider value={context}>
//             {children}
//         </AccountContext.Provider>
//     )
// }

// export default AccountProvider

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
