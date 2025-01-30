"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const hours = Array.from({ length: 24 }, (_, i) => i)

export function Timetable() {
  const [schedule, setSchedule] = useState<Record<string, Record<number, string>>>({})
  const [newEvent, setNewEvent] = useState({ day: "", hour: "", title: "" })

  const addEvent = () => {
    if (newEvent.day && newEvent.hour && newEvent.title) {
      setSchedule((prev) => ({
        ...prev,
        [newEvent.day]: {
          ...prev[newEvent.day],
          [Number.parseInt(newEvent.hour)]: newEvent.title,
        },
      }))
      setNewEvent({ day: "", hour: "", title: "" })
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 border">Time</th>
            {days.map((day) => (
              <th key={day} className="p-2 border">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td className="p-2 border">{`${hour}:00`}</td>
              {days.map((day) => (
                <td key={`${day}-${hour}`} className="p-2 border">
                  {schedule[day]?.[hour]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-4">Add Event</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Event</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="day">Day</Label>
              <select
                id="day"
                className="w-full p-2 border rounded"
                value={newEvent.day}
                onChange={(e) => setNewEvent({ ...newEvent, day: e.target.value })}
              >
                <option value="">Select a day</option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="hour">Hour</Label>
              <select
                id="hour"
                className="w-full p-2 border rounded"
                value={newEvent.hour}
                onChange={(e) => setNewEvent({ ...newEvent, hour: e.target.value })}
              >
                <option value="">Select an hour</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>{`${hour}:00`}</option>
                ))}
              </select>
            </div>
            <div>
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter event title"
              />
            </div>
            <Button onClick={addEvent}>Add Event</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

