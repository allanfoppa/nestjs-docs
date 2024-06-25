import { DataSource } from 'typeorm';

import { Todo } from 'src/todo/entities/todo.entity';
import { DATA_SOURCE } from './database.constant';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db/database.sqlite3',
        synchronize: true,
        entities: [
          Todo
        ],
      });

      return dataSource.initialize();
    },
  },
];
