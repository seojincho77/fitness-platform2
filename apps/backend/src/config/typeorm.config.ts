import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { BodyRecord } from '../body-records/entities/body-record.entity';
import { Exercise } from '../exercises/entities/exercise.entity';
import { Post } from '../posts/entities/post.entity';
import { Routine } from '../routines/entities/routine.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'postgres',          
  port: 5432,
  username: 'user',          
  password: 'pass',
  database: 'fitness_db',
  entities: [User, BodyRecord, Exercise, Post, Routine],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
