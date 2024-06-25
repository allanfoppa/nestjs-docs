import { IsNotEmpty, IsString, IsInt, IsBoolean } from 'class-validator';

export class TodoDto {
  @IsNotEmpty({ message: 'ID must be added' })
  @IsInt({ message: 'ID must be of type number' })
  id: number;

  @IsNotEmpty({ message: 'Todo must be added' })
  @IsString({ message: 'Todo must be of type string' })
  todo: string;

  @IsNotEmpty({ message: 'Is Done must be added' })
  @IsBoolean({ message: 'Is Done must be of type boolean' })
  is_done: boolean;
}
