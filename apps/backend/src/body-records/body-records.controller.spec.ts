import { Test, TestingModule } from '@nestjs/testing';
import { BodyRecordsController } from './body-records.controller';
import { BodyRecordsService } from './body-records.service';

describe('BodyRecordsController', () => {
  let controller: BodyRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BodyRecordsController],
      providers: [BodyRecordsService],
    }).compile();

    controller = module.get<BodyRecordsController>(BodyRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
