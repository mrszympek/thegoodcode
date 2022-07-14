import axios from 'axios';
import { Task } from "../types/task";

axios.defaults.baseURL = 'http://localhost:3000/';

export function getAllTasks() {
  return axios.get<Task[]>('/tasks')
}

export function createTask(title: string) {
  return axios.post('/tasks', { title })
}

export function removeSerivce(id: string) {
  return axios.delete(`/tasks/${id}`)
}

export function updateStatus(id: string, selected: boolean) {
  return axios.patch(`tasks/${id}`, { selected })
}