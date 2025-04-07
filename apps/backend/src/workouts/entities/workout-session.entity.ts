import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Routine } from 'src/routines/entities/routine.entity';

@Entity('workout_sessions')
export class WorkoutSession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Routine, { onDelete: 'SET NULL', nullable: true })
  routine: Routine | null;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date: string;

  @Column()
  start_time: Date;

  @Column({ nullable: true })
  end_time?: Date;

  @Column({ nullable: true })
  total_time?: number;

  @Column({ default: 0 })
  total_volume: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
