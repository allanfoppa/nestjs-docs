import { PartialType } from '@nestjs/mapped-types';
import { TodoDto } from './todo.dto';

export class CreateTodoDto extends PartialType(TodoDto) {}
