import React, { useState } from 'react'
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Class, Course, Section } from "@/components/ui/data"
import { useUser } from "@/components/meta/context"

interface CourseCardProps {
    section: any
    onTouch: (code : string) => void
    showHeader: boolean
    isAdded: boolean
}

export default function CourseCard({section, onTouch, showHeader, isAdded}: CourseCardProps) {
    const { user } = useUser()
    const [ added, setAdded ] = useState(isAdded)

    const [code, setCode] = useState('')
    const [time, setTime] = useState('')
    const [days, setDays] = useState<any[]>([])
    const [location, setLocation] = useState('')
    
    React.useEffect(() => {
        setCode(`${section.subject} ${section.courseNumber}`)
        setLocation(`${section.building} ${section.room}`)

        let startTime = new Date(0, 0, 0, section.beginTime.slice(0, 2), section.beginTime.slice(-2))
        let endTime = new Date(0, 0, 0, section.endTime.slice(0, 2), section.endTime.slice(-2))
        setTime(`${startTime.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})} - ${endTime.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})}`)

        let schedule = []
        section.sunday    ? schedule.push("S") : {}
        section.monday    ? schedule.push("M") : {}
        section.tuesday   ? schedule.push("T") : {}
        section.wednesday ? schedule.push("W") : {}
        section.thursday  ? schedule.push("H") : {}
        section.friday    ? schedule.push("F") : {}
        section.saturday  ? schedule.push("S") : {}
        setDays(schedule)
    }, [])

    const onButtonClick = () => {
        // if (added) {
        //     user.cart = user.cart.filter((e : Class) => {
        //         e.course != course || e.section != section
        //     })
        // }

        // else {
        //     user.cart.push({course: course, section: section})
        // }

        // setAdded(!added)
    }

    const onCardClick = () => {
        // onTouch(course.id)
    }

    return (
        <Card className="w-full max-w-xl bg-white overflow-hidden">
            {(showHeader) && (
                <CardHeader className="bg-slate-100 p-3 pb-2">
                    <div className="font-semibold text-primary"> {code} </div>
                    <div className="text-sm text-muted-foreground"> {section.courseTitle} </div>
                </CardHeader>
            )}
      
            <div className="flex items-stretch gap-4 p-4">
                <div className="text-4xl font-bold min-w-[3rem] flex items-center justify-center pr-4 border-r border-gray-200"> {`${section.sequenceNumber.low}`.padStart(2, '0')} </div>
                
                <div className="flex-1 flex flex-col" onClick={onCardClick}>
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-2 text-sm mb-1">
                            { days.map((day : any, index : any) => (<span key={index} className="font-medium"> {day} </span>)) }
                        </div>
                    
                        <div className="font-medium"> {location} </div>
                    </div>
                    
                    <div className="text-sm text-muted-foreground"> {time} </div>
                    <div className="text-sm text-muted-foreground">{section.instructor} </div>
                </div>

                <div className="flex flex-col justify-between items-end pl-4 border-l border-gray-200">
                    <div className="text-sm text-right mb-2"> Seats Left <br /> {section.seatsAvailable.low}/{section.maximumEnrollment.low} </div>
                    
                    <Button size="icon" className={`rounded-full w-10 h-10 ${added ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={onButtonClick}>
                        {added ? <Minus className="h-6 w-6"/> : <Plus className="h-6 w-6"/>}
                        <span className="sr-only">Add course</span>
                    </Button>
                </div>
            </div>
        </Card>
    )
}