import {
  Controller,
  Get,
  Post as PostMethod,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'; // 경로는 프로젝트 구조에 따라 조정
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 게시글 생성
  @PostMethod()
  create(@Body() dto: CreatePostDto) {
    return this.postsService.createPost(dto);
  }

  // 게시글 단건 조회
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  // 게시글 전체 조회
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  // 게시글 좋아요
  @PostMethod(':id/like')
  @UseGuards(JwtAuthGuard)
  likePost(@Param('id') postId: string, @Req() req: Request) {
    const userId = (req.user as any).userId;
    return this.postsService.likePost(userId, postId);
  }
}


