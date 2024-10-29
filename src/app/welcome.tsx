'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import { UserCircle } from "lucide-react"

export default function Welcome() {
  const router = useRouter()

  const myCourses = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    // For this example, we'll just navigate to the welcome page
    router.push('/courses')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">Welcome</h1>
        <p className="text-center text-gray-600">
          You can register for classes on OCTOBER 29
        </p>
        <div className="space-y-4">
          <Button variant="outline" className="w-full flex items-center justify-center">
            <span className="mr-2">🔍</span> Class Search
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center" onClick={myCourses}>
            <span className="mr-2">📚</span> My Courses
          </Button>
          <Button variant="outline" className="w-full flex items-center justify-center">
            <span className="mr-2">📅</span> Schedule
          </Button>
        </div>
      </div>
    </div>
  )
}