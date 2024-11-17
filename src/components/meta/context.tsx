'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

const defaultUser = "00000000"

interface UserContextType {
    user: string
    setUser: (user: string) => void
}

const UserContext = createContext<UserContextType>({user: defaultUser, setUser: (defaultUser : string) => {}})

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string>(defaultUser)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}