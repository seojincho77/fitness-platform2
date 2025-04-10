import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { BodyRecord } from '../body-records/entities/body-record.entity';
import { Exercise } from '../exercises/entities/exercise.entity';
import { Post } from '../posts/entities/post.entity';
import { Routine } from '../routines/entities/routine.entity';




export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [  User,BodyRecord,Exercise,Post,Routine,],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});