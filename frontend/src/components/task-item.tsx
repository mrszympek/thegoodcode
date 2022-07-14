import { useRecoilState } from "recoil"
import { removeSerivce, updateStatus } from "../services/task"
import { tasksState } from "../store/tasks.atom"
import { Task } from "../types/task"
import { Button } from "./common/button"

export const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const [tasks, setTasks] = useRecoilState(tasksState)

  const handleRemoveService = async () => {
    try {
      await removeSerivce(task.id)
      setTasks(tasks.filter((item) => item.id !== task.id))
    } catch {
      alert("Oppss.. try again later")
    }
  }

  const handleSelectService = async () => {
    try {
      await updateStatus(task.id, !task.selected)

      const updatedTasksArray = tasks.map((item) =>
        item.id === task.id
          ? { ...item, selected: !item.selected }
          : { ...item, selected: false }
      )
      setTasks(updatedTasksArray)
    } catch {
      alert("Oppss.. try again later")
    }
  }

  return (
    <div
      className={`flex items-center space-x-4 mb-2 py-3 rounded-md ${
        task.selected ? "bg-orange-400" : ""
      }`}
    >
      <div className="flex flex-1 min-w-0">
        <p className="text-md font-medium truncate text-white ml-2">
          {task.title}
        </p>
      </div>
      <div className="text-md inline-flex items-center font-semibold text-rose-600 cursor-pointer">
        <Button text="👍" onClick={handleSelectService} />
        <Button text="🚫" onClick={handleRemoveService} />
      </div>
    </div>
  )
}
