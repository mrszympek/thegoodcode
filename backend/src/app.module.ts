import { Module } from '@nestjs/common';
import { TasksService } from './tasks/tasks.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  providers: [TasksService],
})
export class AppModule {}
