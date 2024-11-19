import React, { useState } from 'react'
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader } from "@/components/ui/card"
import { Class, Course, Section } from "@/components/ui/data"
import { useUser } from "@/components/meta/context"
import { toast } from 'react-toastify'
import { read, write } from '@/lib/neo4j'

interface CourseCardProps {
    section: any
    status: string
    onTouch: (code : string) => void
    modal: (callback: () => void) => void
    showHeader?: boolean
}

interface ColorProps {
    header: string
    background: string
    border: string
}

const colorScheme = {
    blue: {
        header: "border-l-blue-500",
        background: "bg-blue-50",
        border: "border-blue-500"
    },
    orange: {
        header: "border-l-orange-500",
        background: "bg-orange-50",
        border: "border-orange-500"
    }
}

const buttonColors = {
    red: "bg-red-500 hover:bg-red-600",
    orange: "bg-orange-500 hover:bg-orange-600",
    blue: "bg-blue-500 hover:bg-blue-600",
}

export default function CourseCard({section, status, onTouch, modal, showHeader = false}: CourseCardProps) {
    console.log(JSON.stringify(section, null, 2))

    const code = `${section.subject} ${section.courseNumber}`
    const location = `${section.building} ${section.room}`
    const instructor = section.instructor ? section.instructor : "Instructor Not Yet Assigned"
    const time = section.room ? getTime(section.beginTime.low, section.endTime.low) : ""
    const days = getDays()

    const { user } = useUser()
    const [ added, setAdded ] = useState(status !== null)
    const [ full, setFull ] = useState(section.seatsAvailable < 1)
    const [ colors, setColors ] = useState<ColorProps>(getColors())
    const [ buttonColor, setButtonColor ] = useState(getButton())

    function getTime(beginTime: number, endTime: number) {
        let start = new Date(0, 0, 0, ~~(beginTime / 100), (beginTime % 100))
        let end = new Date(0, 0, 0, ~~(endTime / 100), (endTime % 100))
        return `${start.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})} - ${end.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})}`
    }

    function getDays() {
        let schedule = []
        section.sunday    ? schedule.push("S") : null
        section.monday    ? schedule.push("M") : null
        section.tuesday   ? schedule.push("T") : null
        section.wednesday ? schedule.push("W") : null
        section.thursday  ? schedule.push("H") : null
        section.friday    ? schedule.push("F") : null
        section.saturday  ? schedule.push("S") : null
        return schedule
    }

    function getColors() {
        if (status === "Registered") return colorScheme.blue
        if (status === "Waitlisted" || full) return colorScheme.orange
        return colorScheme.blue
    }

    function getButton() {
        if (added) return buttonColors.red
        if (full) return buttonColors.orange
        return buttonColors.blue
    }

    const addToCartNotif = () => toast.info('Added to cart!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: 'registered-notif',
        style: { position: 'absolute', left: '15%', right: '25%', width:'calc(100vw - 40vw)',  backgroundColor: "rgb(59 130 246)"}
    });

    const removeFromCartNotif = () => toast.info('Removed from cart.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: 'registered-notif',
        style: { position: 'absolute', left: '15%', right: '25%', width:'calc(100vw - 40vw)'}
    });
    
    const addToWaitlistNotif = () => toast.info('Added to waitlist!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: 'registered-notif',
        style: { position: 'absolute', left: '15%', right: '25%', width:'calc(100vw - 40vw)',  backgroundColor: "#e85d0d"}
    });

    const timeConflictNotif = () => toast.error("Couldn't add seat: TIME CONFLICT", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: 'registered-notif',
        style: { position: 'absolute', left: '15%', right: '25%', width:'calc(100vw - 40vw)'}
    });
    // set this based on whether the section has Zero Seats Remaining
    
    const toggleByWaitlist = () => {
        addSection()
        addToWaitlistNotif()
    }

    const addSection = async () => {
        let query = `MATCH (p:Profile {CWID: "${user}"}) MATCH (s:Section {id: ${section.id.low}}) CREATE (p) -[:Cart]-> (s)`
        write(query)

        setAdded(true)
        setButtonColor(buttonColors.red)
    }

    const removeSection = async () => {
        let query = `MATCH (p:Profile {CWID: "${user}"}) -[r]-> (s:Section {id: ${section.id.low}}) DELETE r`
        write(query)

        setAdded(false)
        setButtonColor(full ? buttonColors.orange : buttonColors.blue)
    }

    const onButtonClick = () => {

        // whoever's over this, just set this variable to whether or not a time conflict occurred
        var timeConflict = false

        if (added) {
            removeSection()
            removeFromCartNotif()
        }
        
        else {
            if (timeConflict) {
                timeConflictNotif()
            }

            else if (full) {
                modal(toggleByWaitlist)
            }

            else {
                addSection()
                addToCartNotif()
            }
        }
    }

    const onCardClick = () => {
        onTouch(code)
    }

    return (
        <Card className=" w-full max-w-xl bg-white overflow-hidden border mb-2">
            {(showHeader) && (
                <CardHeader className={`bg-white border-black p-3 pb-2 border-b-1 border-l-8 ${colors.header}`}>
                    <div className="font-semibold text-primary"> {code} </div>
                    <div className="text-sm text-muted-foreground"> {section.courseTitle} </div>
                </CardHeader>
            )}

            <div className={`${colors.background} flex items-stretch gap-4 p-4 border-l-8 ${colors.border}`}>
                {/* <div className="bg-blue-400 text-white flex items-center justify-center p-1"></div> */}
                <div className="text-2xl font-bold min-w-[3rem] flex items-center justify-center pr-4 border-r border-gray-200"> {`${section.sequenceNumber.low}`.padStart(2, '0')} </div>
                
                <div className="flex-1 flex flex-col" onClick={onCardClick}>
                    <div className="flex justify-between items-start mb-2">
                        <div className=" border-gray-200 rounded-lg bg-white  p-1 wflex gap-2 text-sm mb-1">
                            { days.map((day : string, index : number) => (<span key={index} className="text-xs"> {day} </span>)) }
                        </div>
                    
                        <div className=" border-gray-200 rounded-lg bg-white p-1 flex gap-1 text-sm mb-1"> {location} </div>
                    </div>
                    
                    <div className="mb-4 text-xs text-black"> {time} </div>
                    <div className="text-xs text-muted-foreground"> {section.instructor} </div>
                </div>

                <div className="flex flex-col justify-between pl-4 border-l border-gray-200">
                    <div className="bg-white rounded-lg px-2 py-1 text-xs text-center mb-2"> Seats <br /> <p className='text-lg font-black pt-2'>{section.seatsAvailable.low}/{section.maximumEnrollment.low}</p> </div>
                    

                    <div className="justify-center flex">
                        <Button size="icon" className={`rounded-full w-12 h-12 ${buttonColor}`} onClick={onButtonClick}>
                            {added ? <Minus/> : <Plus/>}
                            <span className="sr-only">Add course</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}