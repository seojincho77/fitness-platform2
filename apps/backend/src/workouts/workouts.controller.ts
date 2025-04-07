import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutSessionDto } from './dto/create-workout-session.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  startSession(@Body() dto: CreateWorkoutSessionDto) {
    return this.workoutsService.startSession(dto);
  }

  @Get(':id')
  findSession(@Param('id', ParseIntPipe) id: number) {
    return this.workoutsService.findSession(id);
  }

  @Get()
  findAll() {
    return this.workoutsService.findAllSessions();
  }
}
