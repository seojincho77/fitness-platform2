import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { BodyRecordsService } from './body-records.service';
import { CreateBodyRecordDto } from './dto/create-body-record.dto';

@Controller('body-records')
export class BodyRecordsController {
  constructor(private readonly brService: BodyRecordsService) {}

  @Post()
  create(@Body() dto: CreateBodyRecordDto) {
    return this.brService.create(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.brService.findOne(id);
  }

  @Get()
  findAll() {
    return this.brService.findAll();
  }
}
