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
      start_time: new Date(dto.start_time),
    });
    const createdSession = await this.sessionRepo.save(session);

    if (dto.sets && dto.sets.length > 0) {
      const workoutSets = dto.sets.map(set =>
        this.setRepo.create({
          workout_session: createdSession,
          exercise: { id: set.exerciseId } as any,
          set_number: set.set_number,
          reps: set.reps,
          weight: set.weight,
          volume: set.volume,
        }),
      );
      await this.setRepo.save(workoutSets);
    }

    return createdSession;
  }

  async findSession(id: number) {
    return this.sessionRepo.findOne({ where: { id } });
  }

  async findAllSessions() {
    return this.sessionRepo.find();
  }
}
