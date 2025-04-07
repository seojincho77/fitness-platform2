import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  muscle_group?: string;

  @Column({ nullable: true })
  type?: string;

  @Column({ nullable: true })
  difficulty?: string;

  @Column({ nullable: true })
  video_url?: string;

  @Column({ nullable: true })
  image_url?: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
