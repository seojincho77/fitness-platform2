import { Test, TestingModule } from '@nestjs/testing';
import { BodyRecordsService } from './body-records.service';

describe('BodyRecordsService', () => {
  let service: BodyRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BodyRecordsService],
    }).compile();

    service = module.get<BodyRecordsService>(BodyRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
