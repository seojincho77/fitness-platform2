import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutSession } from './entities/workout-session.entity';
import { WorkoutSet } from './entities/workout-set.entity';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectRepository(WorkoutSession)
    private readonly sessionRepo: Repository<WorkoutSession>,
    @InjectRepository(WorkoutSet)
    private readonly setRepo: Repository<WorkoutSet>,
  ) {}

  async startSession(dto: CreateWorkoutSessionDto) {
    const session = this.sessionRepo.create({
      user: { id: dto.userId } as any,
      routine: dto.routineId ? ({ id: dto.routineId } as any) : null,
      start_time: dto.start_time,
      // ...
    });
    return this.sessionRepo.save(session);
  }

  async findSession(id: number) {
    return this.sessionRepo.findOne({ where: { id } });
  }

  async findAllSessions() {
    return this.sessionRepo.find();
  }

  // 세트 추가 로직, 세션 완료 로직 등등 추가
}
