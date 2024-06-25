import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

/**
 * https://typeorm.io/entities
 * Column types for sqlite / cordova / react-native / expo
 * int, int2, int8, integer, tinyint, smallint, mediumint, bigint, decimal, numeric, float,
 * double, real, double precision, datetime, varying character, character, native character,
 * varchar, nchar, nvarchar2, unsigned big int, boolean, blob, text, clob, date
 */

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'todo',
    length: 2000,
    nullable: false
  })
  todo: string;

  @Column({
    type: 'boolean',
    name: 'is_done',
    nullable: false
  })
  is_done: boolean = false;
}
