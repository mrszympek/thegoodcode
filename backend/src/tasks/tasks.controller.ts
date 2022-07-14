import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(@Body() title: { title: string }): Task {
    return this.taskService.createTask(title);
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string) {
    return this.taskService.removeService(id);
  }

  @Patch('/:id')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('selected') selected: boolean,
  ): Task {
    return this.taskService.updateTaskStatus(id, selected);
  }
}
