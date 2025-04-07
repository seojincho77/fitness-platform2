import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BodyRecord } from './entities/body-record.entity';
import { CreateBodyRecordDto } from './dto/create-body-record.dto';

@Injectable()
export class BodyRecordsService {
  constructor(
    @InjectRepository(BodyRecord)
    private readonly brRepo: Repository<BodyRecord>,
  ) {}

  create(dto: CreateBodyRecordDto) {
    const record = this.brRepo.create(dto);
    return this.brRepo.save(record);
  }

  findOne(id: number) {
    return this.brRepo.findOne({ where: { id } });
  }

  findAll() {
    return this.brRepo.find();
  }
}
