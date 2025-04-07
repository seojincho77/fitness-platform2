import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Routine } from './entities/routine.entity';
import { RoutineExercise } from './entities/routine-exercise.entity';
import { CreateRoutineDto } from './dto/create-routine.dto';

@Injectable()
export class RoutinesService {
  constructor(
    @InjectRepository(Routine)
    private readonly routineRepo: Repository<Routine>,
    @InjectRepository(RoutineExercise)
    private readonly routineExerciseRepo: Repository<RoutineExercise>,
  ) {}

  async createRoutine(dto: CreateRoutineDto) {
    const routine = this.routineRepo.create({
      name: dto.name,
      description: dto.description,
      is_public: dto.is_public ?? true,
      // creatorId 등은 dto로 받거나, JWT 토큰 정보로 설정
    });
    await this.routineRepo.save(routine);

    if (dto.exercises) {
      const exList = dto.exercises.map(ex => this.routineExerciseRepo.create({
        routine,
        exercise: { id: ex.exerciseId } as any, // exercise_id
        default_sets: ex.defaultSets,
        default_reps: ex.defaultReps,
      }));
      await this.routineExerciseRepo.save(exList);
    }

    return routine;
  }

  async findRoutine(id: number) {
    return this.routineRepo.findOne({ where: { id }});
  }

  async findAllRoutines() {
    return this.routineRepo.find();
  }
}
