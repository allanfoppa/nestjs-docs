import { Inject } from '@nestjs/common';
import { TODO_REPOSITORY } from 'src/database/database.constant';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoDto } from './dto/todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

export class TodoRepository {

  constructor(
    @Inject(TODO_REPOSITORY)
    private repository: Repository<TodoDto>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<object> {
    const todo = this.repository.create(createTodoDto);
    const savedTodo = await this.repository.save(todo);
    return savedTodo;
  }

  async findAll(): Promise<TodoDto[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<TodoDto> {
    return await this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: number, updateMenuDto: UpdateTodoDto): Promise<TodoDto> {
    const todo = await this.findOne(id);
    Object.assign(todo, updateMenuDto);
    return await this.repository.save(todo);
  }

  async remove(id: number): Promise<any> {
    return await this.repository.delete(id);
  }

}
