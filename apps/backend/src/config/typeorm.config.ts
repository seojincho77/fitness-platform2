<<<<<<< HEAD
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
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, BodyRecord, Exercise, Post, Routine],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
=======
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
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, BodyRecord, Exercise, Post, Routine],
  migrations: ['src/migrations/*.ts'],
  synchronize: false,
});
>>>>>>> 29a2bb83de5f7d355780e2ee41bf437e0970f6cf
