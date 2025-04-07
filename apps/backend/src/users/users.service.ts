import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Follow } from './entities/follow.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Follow)
    private readonly followRepo: Repository<Follow>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  async findAll() {
    return this.userRepo.find();
  }

  // 팔로우, 언팔로우 등 followRepo 관련 메서드도 작성 가능
  async followUser(followerId: number, followingId: number) {
    const follow = this.followRepo.create({ follower: { id: followerId }, following: { id: followingId } });
    return this.followRepo.save(follow);
  }
}
