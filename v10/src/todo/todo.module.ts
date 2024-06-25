import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { DatabaseModule } from 'src/database/database.module';
import { todosProviders } from './providers/todo.providers';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [
    ...todosProviders,
    TodoService,
    TodoRepository
  ],
})
export class TodoModule {}
