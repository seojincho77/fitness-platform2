import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoutinesController } from './routines.controller';
import { RoutinesService } from './routines.service';
import { Routine } from './entities/routine.entity';
import { RoutineExercise } from './entities/routine-exercise.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Routine, RoutineExercise])],
  controllers: [RoutinesController],
  providers: [RoutinesService],
})
export class RoutinesModule {}
