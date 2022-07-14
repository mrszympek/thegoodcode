import { v4 as uuid } from 'uuid';

import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '6f9e106a-0286-4917-9bf8-4e9b64c36100',
      title: 'Task 1',
      selected: false,
    },
    {
      id: '6f9e106a-0286-4917-9bf8-4e9b64c26100',
      title: 'Task 2',
      selected: false,
    },
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask({ title }) {
    const task: Task = {
      id: uuid(),
      title,
      selected: false,
    };

    this.tasks.push(task);

    return task;
  }

  removeService(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, selected: boolean): Task {
    const tasksWithResetedSelectedProperty = this.tasks.map((task) => ({
      ...task,
      selected: false,
    }));

    this.tasks = tasksWithResetedSelectedProperty;

    const task = this.tasks.find((task) => task.id === id);

    if (selected) {
      task.selected = selected;
    }

    return task;
  }
}
