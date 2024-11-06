'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccountContext } from "@/components/meta/context"
import { Account, Accounts } from "@/components/ui/data"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { setUser } = useContext(AccountContext)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    let account = Accounts.filter((account : Account) => (account.email == email && account.password == password))

    if (account.length) {
      setUser(account[0])
      router.push('/welcome')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">RegiLax</h2>
          <div className="mt-2">
            <svg viewBox="0 0 100 20" className="w-full">
              <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Log In
          </Button>
          <Button variant="outline" className="w-full">
            Sign in with SSO
          </Button>
        </form>
      </div>
    </div>
  )
}