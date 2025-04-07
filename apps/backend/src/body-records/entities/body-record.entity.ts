import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('body_records')
export class BodyRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  date: string;

  @Column()
  weight: number;

  @Column({ nullable: true })
  body_fat_percentage?: number;

  @Column({ nullable: true })
  skeletal_muscle_mass?: number;
}
