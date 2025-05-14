import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('body_records')
export class BodyRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date: string;

  @Column({ type: 'float' })
  weight: number;

  @Column({ type: 'float', nullable: true })
  body_fat_percentage?: number;

  @Column({ type: 'float', nullable: true })
  skeletal_muscle_mass?: number;
}
