import 'reflect-metadata';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../../.env.docker'), // dist/src/config 기준 상위 두 단계
});

import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Follow } from '../users/entities/follow.entity';
import { BodyRecord } from '../body-records/entities/body-record.entity';
import { Exercise } from '../exercises/entities/exercise.entity';
import { Post } from '../posts/entities/post.entity';
import { Like } from '../posts/entities/like.entity';
import { Routine } from '../routines/entities/routine.entity';
import { WorkoutSession } from '../workouts/entities/workout-session.entity';
import { WorkoutSet } from '../workouts/entities/workout-set.entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    User,
    Follow,
    BodyRecord,
    Exercise,
    Post,
    Like,
    Routine,
    WorkoutSession,
    WorkoutSet,
  ],
  migrations: [path.join(__dirname, '../migrations/*.js')], // ✔ 이 부분이 핵심!
  synchronize: false,
});
