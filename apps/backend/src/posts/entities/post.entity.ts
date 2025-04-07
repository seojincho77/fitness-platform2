import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { WorkoutSession } from 'src/workouts/entities/workout-session.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => WorkoutSession, { onDelete: 'SET NULL', nullable: true })
  workout_session: WorkoutSession | null;

  @Column({ nullable: true })
  image_url?: string;

  @Column({ nullable: true })
  content?: string;

  @Column({ default: 0 })
  likes_count: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
