import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity('follows')
@Unique(['follower', 'following'])
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  follower: User;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  following: User;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
