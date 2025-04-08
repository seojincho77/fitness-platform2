import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Follow } from './entities/follow.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Follow)
    private readonly followRepo: Repository<Follow>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    dto.password = await bcrypt.hash(dto.password, salt);

    const user = this.userRepo.create(dto);
    return this.userRepo.save(user);
  }

  async findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  async findAll() {
    return this.userRepo.find();
  }

  async remove(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID=${id} not found`);
    }
    return this.userRepo.remove(user);
  }

  async followUser(followerId: number, followingId: number) {
    const follow = this.followRepo.create({
      follower: { id: followerId },
      following: { id: followingId },
    });
    return this.followRepo.save(follow);
  }
}