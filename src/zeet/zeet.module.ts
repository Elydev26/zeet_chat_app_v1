import { Module } from '@nestjs/common';
import { ZeetController } from './zeet.controller';
import { ZeetService } from './zeet.service';

@Module({
  controllers: [ZeetController],
  providers: [ZeetService]
})
export class ZeetModule {}
