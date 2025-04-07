import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Like } from './entities/like.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
    @InjectRepository(Like)
    private readonly likeRepo: Repository<Like>,
  ) {}

  createPost(dto: CreatePostDto) {
    const post = this.postRepo.create({
      user: { id: dto.userId } as any,
      workout_session: dto.workoutSessionId ? { id: dto.workoutSessionId } as any : null,
      content: dto.content,
      image_url: dto.image_url,
    });
    return this.postRepo.save(post);
  }

  findOne(id: number) {
    return this.postRepo.findOne({ where: { id } });
  }

  findAll() {
    return this.postRepo.find();
  }

  // 예: 좋아요 로직
  async likePost(userId: number, postId: number) {
    const like = this.likeRepo.create({ user: { id: userId } as any, post: { id: postId } as any });
    return this.likeRepo.save(like);
  }
}
