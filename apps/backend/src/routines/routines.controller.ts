import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { RoutinesService } from './routines.service';
import { CreateRoutineDto } from './dto/create-routine.dto';

@Controller('routines')
export class RoutinesController {
  constructor(private readonly routinesService: RoutinesService) {}

  @Post()
  create(@Body() dto: CreateRoutineDto) {
    return this.routinesService.createRoutine(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.routinesService.findRoutine(id);
  }

  @Get()
  findAll() {
    return this.routinesService.findAllRoutines();
  }
}
