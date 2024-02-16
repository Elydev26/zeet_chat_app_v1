import { Test, TestingModule } from '@nestjs/testing';
import { ZeetController } from './zeet.controller';

describe('ZeetController', () => {
  let controller: ZeetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZeetController],
    }).compile();

    controller = module.get<ZeetController>(ZeetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
