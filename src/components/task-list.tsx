"use client";

import { useState } from "react";
import { MoreHorizontal, ChevronDown, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddTaskDialog } from "./add-task-dialog";
import { useTheme } from "@/contexts/theme-context";

interface Task {
  id: string;
  title: string;
  type: string;
  description: string;
  status: "Todo" | "In Progress" | "Backlog";
  priority: "High" | "Medium" | "Low";
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-500/20 text-red-400 border-red-500/50";
    case "Medium":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
    case "Low":
      return "bg-green-500/20 text-green-400 border-green-500/50";
    default:
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-purple-500/20 text-purple-400 border-purple-500/50";
    case "Backlog":
      return "bg-orange-500/20 text-orange-400 border-orange-500/50";
    case "Todo":
      return "bg-blue-500/20 text-blue-400 border-blue-500/50";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/50";
  }
};

export function TaskList() {
  const { theme } = useTheme();
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "TASK-8782",
      type: "Feature",
      title: "Implement user authentication system",
      status: "In Progress",
      priority: "High",
      description: "",
    },
    {
      id: "TASK-7878",
      type: "Bug",
      title: "Fix responsiveness issues on mobile devices",
      status: "Todo",
      priority: "Medium",
      description: "",
    },
    {
      id: "TASK-7839",
      type: "Documentation",
      title: "Update API documentation for new endpoints",
      status: "Backlog",
      priority: "Low",
      description: "",
    },
  ]);

  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);

  const handleAddTask = (newTask: any) => {
    const taskWithId = {
      ...newTask,
      id: `TASK-${Math.floor(Math.random() * 10000)}`,
      description: "",
    };
    setTasks([...tasks, taskWithId]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <Button
          className="bg-green-600 hover:bg-green-700"
          onClick={() => setIsAddTaskDialogOpen(true)}
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Task
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search tasks..."
            className="pl-10 glass-effect w-full"
          />
        </div>
        <Button variant="outline" size="icon" className="glass-effect">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>

      <div className="glass-effect rounded-xl overflow-hidden">
        <div className="grid grid-cols-[25px_2fr_1fr_1fr_50px] gap-3 p-4 border-b border-white/10 items-center text-sm font-medium">
          <input type="checkbox" className="translate-y-[2px]" />
          <div>Title</div>
          <div>Status</div>
          <div>Priority</div>
          <div></div>
        </div>

        {tasks.map((task) => (
          <div
            key={task.id}
            className="grid grid-cols-[25px_2fr_1fr_1fr_50px] gap-3 p-4 items-center hover:bg-task-hover transition-colors border-b border-white/10 last:border-0"
          >
            <input type="checkbox" className="translate-y-[2px]" />
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs text-green-400 font-medium">
                  {task.id}
                </span>
                <span className="text-xs px-2 py-1 rounded-full glass-effect">
                  {task.type}
                </span>
              </div>
              <div className="text-sm font-medium text-blue-100">
                {task.title}
              </div>
            </div>
            <div className="flex items-center">
              <span
                className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>
            <div>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>
          {tasks.length} of {tasks.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-6">
          <div>Rows per page: 10</div>
          <div>Page 1 of 1</div>
        </div>
      </div>

      <AddTaskDialog
        isOpen={isAddTaskDialogOpen}
        onClose={() => setIsAddTaskDialogOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
}
