import { atom } from "recoil";
import { Task } from "../types/task";

export const tasksState = atom({
  key: 'tasks',
  default: [] as Task[]
})