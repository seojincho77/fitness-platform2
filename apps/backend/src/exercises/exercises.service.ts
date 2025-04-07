import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './entities/exercise.entity';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private readonly exerciseRepo: Repository<Exercise>,
  ) {}

  create(dto: CreateExerciseDto) {
    const exercise = this.exerciseRepo.create(dto);
    return this.exerciseRepo.save(exercise);
  }

  findOne(id: number) {
    return this.exerciseRepo.findOne({ where: { id } });
  }

  findAll() {
    return this.exerciseRepo.find();
  }
}
