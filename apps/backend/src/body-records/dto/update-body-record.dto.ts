import { PartialType } from '@nestjs/mapped-types';
import { CreateBodyRecordDto } from './create-body-record.dto';

export class UpdateBodyRecordDto extends PartialType(CreateBodyRecordDto) {}
