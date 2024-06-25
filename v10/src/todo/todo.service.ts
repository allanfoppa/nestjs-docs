import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';
import { TodoDto } from './dto/todo.dto';

@Injectable()
export class TodoService {

  constructor(
    private todoRepository: TodoRepository
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<CreateTodoDto> {
    let todo = await this.todoRepository.create(createTodoDto);

    if (!todo) {
      throw new BadRequestException(
        `Todo not created`,
        {
          cause: new Error(),
          description: 'Todo wasn\'t save in the database'
        }
      );
    }

    return todo;
  }

  async findAll(): Promise<TodoDto[]> {
    let all = await this.todoRepository.findAll();

    if (!all) {
      throw new BadRequestException(
        `Can't fetch all todos`,
        {
          cause: new Error(),
          description: 'Some error description'
        }
      );
    }

    return all
  }

  async findOne(id: number): Promise<CreateTodoDto> {

    let todo = await this.todoRepository.findOne(id);

    if (!todo) {
      throw new NotFoundException(
        `Todo with ID ${id} not found`,
        {
          cause: new Error(),
          description: 'Some error description'
        }
      );
    }

    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<UpdateTodoDto> {

    let update = await this.todoRepository.update(id, updateTodoDto);

    if (!update) {
      throw new BadRequestException(
        `Todo ID ${id} not updated`,
        {
          cause: new Error(),
          description: 'Some error description'
        }
      );
    } else {
      return update;
    }

  }

  async remove(id: number): Promise<object> {
    const result = await this.todoRepository.remove(id);

    if (result.affected === 0) {
      throw new NotFoundException(
        `A todo "${id}" was not found`,
        {
          cause: new Error(),
          description: 'Some error description'
        }
      );
    }

    return { message: 'Todo successfully deleted' };
  }

}
