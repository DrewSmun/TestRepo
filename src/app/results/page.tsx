'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ChevronLeft, ShoppingCart, ChevronDown, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Course, Section, Courses, Class, Accounts } from "@/components/ui/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import CourseCard from "@/components/ui/course-card"
import { useAccount } from "@/components/meta/context"

function CourseDropdown({course} : {course: Course}) {
  const { user } = useAccount()

  const [isExpanded, setIsExpanded] = useState(false);

  const AddCourse = (subject : string, course : string, section : string) => {
    user!.cart.push({subject: subject, course: course, section: section})
  }

  return (
    <Card className="mb-4 bg-white">
      <CardHeader className="p-4 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <CardTitle className="text-lg font-bold"> {course.id} </CardTitle>
          <div className="text-sm text-muted-foreground"> {course.title} </div>
        </div>
        
        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
          <ChevronDown className={ `h-5 w-5 transition-transform ${isExpanded ? 'transform rotate-180' : ''}` }/>
        </Button>
      </CardHeader>

      <CardContent className="px-4 pb-4">
        {isExpanded && (
          <div className="mt-4 space-y-4">
            {course.sections.map((section : Section) => (
              <CourseCard
                section={section.id}
                days={section.days}
                time={section.time}
                location={section.location}
                professor={section.professor}
                seatsOpen={section.seatsOpen}
                seats={section.seats}
                onAdd={() => AddCourse(course.subject, course.number, section.id)}>
              </CourseCard>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function Results() {
  const searchParams = useSearchParams()
  const subject = searchParams.get('subject')
  const number = searchParams.get('number')

  console.log(`Subject: ${subject}, Course: ${number}`)

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <main className="p-4">
        { Courses.filter(
          (course : Course) => (['', course.subject].includes(subject!) && ['', course.number].includes(number!))
        ).map(
          (course : Course) => (<CourseDropdown course={course}/>)
        )}
      </main>
    </div>
  );
}