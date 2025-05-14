import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { WorkoutSession } from './workout-session.entity';
import { Exercise } from 'src/exercises/entities/exercise.entity';

@Entity('workout_sets')
export class WorkoutSet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => WorkoutSession, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'workout_sessionId' })
  workout_session: WorkoutSession;

  @ManyToOne(() => Exercise, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'exerciseId' })
  exercise: Exercise;

  @Column()
  set_number: number;

  @Column()
  reps: number;

  @Column()
  weight: number;

  @Column()
  volume: number;
}
