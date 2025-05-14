import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Post } from './entities/post.entity';
import { Like } from './entities/like.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { User } from 'src/users/entities/user.entity';
import { WorkoutSession } from 'src/workouts/entities/workout-session.entity';

@Injectable()
export class PostsService {
  private userRepo: Repository<User>;
  private workoutSessionRepo: Repository<WorkoutSession>;
  private likeRepo: Repository<Like>;

  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,

    private readonly dataSource: DataSource,
  ) {
    this.userRepo = this.dataSource.getRepository(User);
    this.workoutSessionRepo = this.dataSource.getRepository(WorkoutSession);
    this.likeRepo = this.dataSource.getRepository(Like);
  }

  async createPost(dto: CreatePostDto) {
    const user = await this.userRepo.findOne({ where: { id: dto.userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const workoutSession = dto.workout_sessionId
      ? await this.workoutSessionRepo.findOne({
          where: { id: dto.workout_sessionId },
        })
      : null;

    const post = this.postRepo.create({
      content: dto.content,
      image_url: dto.image_url,
      user,
      userId: dto.userId,
      workout_session: workoutSession,
      workout_sessionId: workoutSession?.id ?? null,
    });

    return this.postRepo.save(post);
  }

  async findOne(id: string) {
    return this.postRepo.findOne({
      where: { id },
      relations: ['user', 'workout_session'],
    });
  }

  async findAll() {
    return this.postRepo.find({
      relations: ['user', 'workout_session'],
    });
  }

  async likePost(userId: number, postId: string) {
    const post = await this.postRepo.findOne({ where: { id: postId } });
    if (!post) {
      throw new Error('Post not found');
    }

    const user = await this.userRepo.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const existing = await this.likeRepo.findOne({
      where: { userId, postId },
    });
    if (existing) {
      throw new Error('Already liked');
    }

    const like = this.likeRepo.create({
      userId,
      postId,
      user,
      post,
    });

    post.likes_count += 1;

    await this.dataSource.transaction(async (manager) => {
      await manager.save(like);
      await manager.save(post);
    });

    return { success: true };
  }
}
