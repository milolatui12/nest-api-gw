import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: '@#$@F@@342@#4'
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
