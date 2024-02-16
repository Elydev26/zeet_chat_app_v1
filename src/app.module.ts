import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ZeetModule } from './zeet/zeet.module';
import { LikeModule } from './like/like.module';

@Module({
  imports: [AuthModule, UserModule, ZeetModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
