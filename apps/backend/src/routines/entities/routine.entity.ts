import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('routines')
export class Routine {
  @PrimaryGeneratedColumn()
  id: number;

  // onDelete: 'CASCADE'는 DB에서 이미 설정
  @ManyToOne(() => User, { onDelete: 'CASCADE', nullable: true })
  creator?: User;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ default: true })
  is_public: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
