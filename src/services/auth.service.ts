import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from 'src/dtos/auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    {
      id: 1,
      username: 'admin',
      password: '123'
    },
    {
      id: 2,
      username: 'admin2',
      password: '123'
    },
    {
      id: 3,
      username: 'admin3',
      password: '123'
    },
  ]

  constructor(private jwtService: JwtService) {}


  async login(payload: LoginDto) {
    const account = await this.users.find(user => user.username === payload.username)
    if (!account || account?.password !== payload.password) {
      throw new UnauthorizedException()
    }

    const { password, ...accountInfo } = account

    return {
      accountInfo,
      accessToken: await this.jwtService.signAsync(accountInfo)
    }
  }
}
