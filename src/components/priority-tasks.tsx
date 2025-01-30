"use client"

import { useState } from "react"
import { TaskItem } from "./task-item"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

export function PriorityTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", priority: "high" },
    { id: 2, title: "Review team meeting notes", priority: "medium" },
    { id: 3, title: "Prepare presentation slides", priority: "high" },
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, priority: "medium" }])
      setNewTask("")
    }
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const updateTaskPriority = (id: number, newPriority: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, priority: newPriority } : task)))
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Priority Tasks</h2>
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask}>
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onUpdatePriority={(newPriority) => updateTaskPriority(task.id, newPriority)}
          />
        ))}
      </div>
    </div>
  )
}

