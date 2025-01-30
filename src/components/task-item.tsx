import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Task {
  id: number
  title: string
  priority: string
}

interface TaskItemProps {
  task: Task
  onDelete: () => void
  onUpdatePriority: (priority: string) => void
}

export function TaskItem({ task, onDelete, onUpdatePriority }: TaskItemProps) {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow">
      <span className="flex-1">{task.title}</span>
      <div className="flex items-center space-x-2">
        <Select value={task.priority} onValueChange={onUpdatePriority}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

