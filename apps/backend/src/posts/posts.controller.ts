import { Controller, Get, Post as PostMethod, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @PostMethod()
  create(@Body() dto: CreatePostDto) {
    return this.postsService.createPost(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }
}
