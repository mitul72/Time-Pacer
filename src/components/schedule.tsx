"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Minus, Star, Clock } from "lucide-react"

const timeSlots = [
  "12:00AM - 01:00AM",
  "01:00AM - 02:00AM",
  "02:00AM - 03:00AM",
  // ... add more time slots
]

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Wednesday")

  return (
    <div className="space-y-8 p-6 max-w-[1200px] mx-auto">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          SCHEDULE
        </h1>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Select Day</h2>
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger className="w-[240px] glass-effect">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-secondary/95 backdrop-blur-lg border-white/10">
                {days.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <Button size="icon" className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 hover-effect">
              <Plus className="h-6 w-6" />
            </Button>
            <Button size="icon" className="w-12 h-12 rounded-xl bg-red-600 hover:bg-red-700 hover-effect">
              <Minus className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 space-y-4 hover-effect">
          <div className="grid grid-cols-[250px_1fr_80px] gap-6 items-center">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Time Slot</label>
              <Select>
                <SelectTrigger className="glass-effect">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  <SelectValue placeholder="12:00AM - 01:00AM" />
                </SelectTrigger>
                <SelectContent className="bg-secondary/95 backdrop-blur-lg border-white/10">
                  {timeSlots.map((slot) => (
                    <SelectItem key={slot} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Task</label>
              <input
                type="text"
                placeholder="Enter task description..."
                className="w-full h-10 rounded-lg glass-effect px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex justify-end">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg hover:bg-white/10">
                <Star className="h-5 w-5 text-yellow-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

