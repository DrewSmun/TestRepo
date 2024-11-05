'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ChevronLeft, ShoppingCart, ChevronDown, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Course, Section, Courses, } from "@/components/ui/data"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import CourseCard from "@/components/ui/course-card"
import searchParams from "@/components/ui/global"

function CourseDropdown({ course }: { course: Course }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const AddCourse = () => {}

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
                onAdd={AddCourse}>
              </CourseCard>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function Results() {
  const params = useParams<{subject: string, course: string}>()

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">{params.subject}</h1>
      <main className="p-4">
        { Courses.filter(
          (course : Course) => (["any", course.subject].includes(params.subject) && ["any", course.number].includes(params.course))
        ).map(
          (course : Course) => (<CourseDropdown course={course}/>)
        )}
      </main>
    </div>
  );
}