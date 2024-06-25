import { DataSource } from 'typeorm';
import { Todo } from 'src/todo/entities/todo.entity';
import { DATA_SOURCE, TODO_REPOSITORY } from 'src/database/database.constant';

export const todosProviders = [
  {
    provide: TODO_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Todo),
    inject: [DATA_SOURCE],
  },
];
