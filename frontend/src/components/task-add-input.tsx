import { useState } from "react"
import { useRecoilState } from "recoil"
import { createTask } from "../services/task"
import { tasksState } from "../store/tasks.atom"
import { Button } from "./common/button"

export const TaskAddInput: React.FC<{}> = () => {
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [tasks, setTasks] = useRecoilState(tasksState)

  const handleTaskNameInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value)
  }

  const handleAddNewTask = async () => {
    try {
      const { data } = await createTask(newTaskTitle)
      setTasks([...tasks, data])

      // clear input if task crated succesfully
      setNewTaskTitle("")
    } catch {
      alert("Oppss.. try again later")
    }
  }

  return (
    <div className="flex mt-8">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-100 p-2.5 "
        value={newTaskTitle}
        onChange={handleTaskNameInputChange}
        type="text"
        placeholder="Task name"
      />
      <Button text="Add Task" onClick={handleAddNewTask} />
    </div>
  )
}
