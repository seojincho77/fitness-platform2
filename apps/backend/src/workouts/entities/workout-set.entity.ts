import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { WorkoutSession } from './workout-session.entity';
import { Exercise } from 'src/exercises/entities/exercise.entity';

@Entity('workout_sets')
export class WorkoutSet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => WorkoutSession, { onDelete: 'CASCADE' })
  workout_session: WorkoutSession;

  @ManyToOne(() => Exercise, { onDelete: 'CASCADE' })
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
