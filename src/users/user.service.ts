import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity'; // typeormで定義したUserエンティティ

/**
 * @description User情報を扱うクラス
 */
@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  // ユーザーを一人を返す
  async findOne(accountName: User['accountName']): Promise<User | undefined> {
    // typeormからDBにアクセスして、ユーザーを取得する
    return this.userRepository.findOne({ where: { accountName } });
  }

  async getUsers(): Promise<User[]>{
    return await this.userRepository.find();
  }

  async getUserById(id): Promise<User> {
    return await this.userRepository.findOne(id)
  }

}