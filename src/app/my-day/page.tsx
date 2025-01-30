"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, Clock, MoreVertical } from "lucide-react"

interface Task {
  id: string
  title: string
  completed: boolean
  dueTime: string
  category: string
}

export default function MyDayPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Review project proposal", completed: false, dueTime: "10:00 AM", category: "Work" },
    { id: "2", title: "Go for a run", completed: true, dueTime: "07:00 AM", category: "Health" },
    { id: "3", title: "Buy groceries", completed: false, dueTime: "06:00 PM", category: "Errands" },
    { id: "4", title: "Call mom", completed: false, dueTime: "08:00 PM", category: "Personal" },
  ])

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedTasks = tasks.filter((task) => task.completed).length
  const totalTasks = tasks.length
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          My Day
        </h1>
        <div className="flex items-center space-x-2 text-muted-foreground">
          <CalendarDays className="h-5 w-5" />
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Today's Progress</CardTitle>
          <CardDescription>
            {completedTasks} of {totalTasks} tasks completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="h-2" />
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map((task) => (
          <Card key={task.id} className={`glass-effect ${task.completed ? "opacity-60" : ""}`}>
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <Checkbox checked={task.completed} onCheckedChange={() => toggleTask(task.id)} className="h-6 w-6" />
                <div>
                  <p className={`font-medium ${task.completed ? "line-through" : ""}`}>{task.title}</p>
                  <p className="text-sm text-muted-foreground">{task.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  {task.dueTime}
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

