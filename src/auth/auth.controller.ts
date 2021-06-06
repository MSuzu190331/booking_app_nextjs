import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

type PasswordOmitUser = Omit<User, "password">

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @UseGuards(AuthGuard('local')) // login関数の前にLocalStrategy.validateが実行される。
  @Post('login') 
  async login(@Request() req: { user: PasswordOmitUser }) {
    // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user;

    // JwtToken を返す
    return this.authService.login(req.user);
  }
  
  @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
  @Get('mypage')
  async getProfile(@Request() req: { user: PasswordOmitUser }) {
    // JwtStrategy.validate()で認証して返した値がreq.userに入ってる
    const user = req.user;

    // 認証に成功したユーザーの情報を返す
    return req.user;
  }

}
