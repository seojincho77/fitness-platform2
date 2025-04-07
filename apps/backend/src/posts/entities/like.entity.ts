import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Unique } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Post } from './post.entity';

@Entity('likes')
@Unique(['user', 'post'])
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Post, { onDelete: 'CASCADE' })
  post: Post;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
