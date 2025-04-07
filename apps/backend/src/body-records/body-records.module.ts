import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyRecordsController } from './body-records.controller';
import { BodyRecordsService } from './body-records.service';
import { BodyRecord } from './entities/body-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BodyRecord])],
  controllers: [BodyRecordsController],
  providers: [BodyRecordsService],
})
export class BodyRecordsModule {}
