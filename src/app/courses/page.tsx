'use client'

import { useState } from 'react'
import { ChevronLeft, ShoppingCart, ChevronDown, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import CourseCard from "@/components/ui/course-card"
import { Course, Section, Class, Courses } from "@/components/ui/data"
import { useUser } from "@/components/meta/context"

export default function CourseList() {
  const { user } = useUser()

  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <main className="p-4">
        {user?.enrolled.map((e : Class) => (
          <CourseCard
            course={e.course}
            section={e.section}
            showHeader={true}
            isAdded={true}>
          </CourseCard>
        ))}
      </main>
    </div>
  );
}