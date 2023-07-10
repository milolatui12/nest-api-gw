import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { LoginDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
 
  @Post('login')
  login(@Body() payload: LoginDto) {
    return this.authService.login(payload)
  }

}
