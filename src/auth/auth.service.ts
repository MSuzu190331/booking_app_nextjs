import bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';

// Omit<T,K>は既に存在するT型の中からKで選択した一部のプロパティを除いた新たな型を構築
type PasswordOmitUser = Omit<User, 'password'>;

// JwtについているPayload情報の型
interface JWTPayload  {
  userId: User['id'];
  username: User['name'];
}

/**
 * @description usernameとpasswordを使った認証処理を行うクラス
 */
@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  // ユーザーを認証する
  async validateUser(accountName: User['accountName'], pass: User['password']): Promise<PasswordOmitUser | null> {
    const user = await this.userService.findOne(accountName);

    // 暗号化されてDBに保存されているパスワードを複合し、渡ってきたユーザー情報と一緒か比べる（真偽値で返ってくる）
    if (user && bcrypt.compareSync(pass, user.password)) {
      // ユーザー情報のパスワード情報とそれ以外の情報を分割代入し、パスワード以外の情報だけresultとして呼び出し元に返す。（パスワード情報を外部に出さないため）
      const { password, ...result } = user; 
      return result;
    }

    return null;
  }

  // jwt tokenを返す
  async login(user: PasswordOmitUser) {
    // jwtにつけるPayload情報
    const payload: JWTPayload = { userId: user.id, username: user.accountName };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}