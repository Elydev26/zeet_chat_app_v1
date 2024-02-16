import { Test, TestingModule } from '@nestjs/testing';
import { ZeetService } from './zeet.service';

describe('ZeetService', () => {
  let service: ZeetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZeetService],
    }).compile();

    service = module.get<ZeetService>(ZeetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
