import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { WorkoutSession } from 'src/workouts/entities/workout-session.entity';

@Entity('posts')
@Unique(['user', 'workout_session'])
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;

  @ManyToOne(() => WorkoutSession, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'workout_sessionId' })
  workout_session: WorkoutSession | null;

  @Column({ type: 'int', nullable: true }) // ⬅ 고침
  workout_sessionId: number | null;

  @Column({ nullable: true })
  image_url?: string;

  @Column({ nullable: true, type: 'text' })
  content?: string;

  @Column({ default: 0 })
  likes_count: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
