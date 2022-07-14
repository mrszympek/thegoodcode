import { useEffect } from "react"
import { useRecoilState } from "recoil"

import { getAllTasks } from "../services/task"
import { tasksState } from "../store/tasks.atom"
import { TaskAddInput } from "./task-add-input"
import { TaskItem } from "./task-item"

export const TasksList: React.FC<{}> = () => {
  const [tasks, setTasks] = useRecoilState(tasksState)

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const { data } = await getAllTasks()

        if (data) {
          setTasks(data)
        }
      } catch {
        alert("Oppss.. try again later")
      }
    }

    fetchAllTasks()
  }, [])

  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="max-w-xl rounded-lg border shadow-md sm:p-8 bg-gray-800 border-gray-700 mx-auto">

        <h1 className="text-xl font-bold leading-none  text-white mb-6">
          Tasks Management app
        </h1>

        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}

        <TaskAddInput />
      </div>
    </div>
  )
}
