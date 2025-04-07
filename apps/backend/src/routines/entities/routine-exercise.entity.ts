import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Routine } from './routine.entity';
import { Exercise } from 'src/exercises/entities/exercise.entity';

@Entity('routine_exercises')
export class RoutineExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Routine, { onDelete: 'CASCADE' })
  routine: Routine;

  @ManyToOne(() => Exercise, { onDelete: 'CASCADE' })
  exercise: Exercise;

  @Column({ nullable: true })
  exercise_order?: number;

  @Column({ nullable: true })
  default_sets?: number;

  @Column({ nullable: true })
  default_reps?: number;

  @Column({ nullable: true })
  default_weight?: number;
}
