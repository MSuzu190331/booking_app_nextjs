import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from "./user.entity"; 

@Controller('reserve')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getReserves(): Promise<User[]>{
    return await this.userService.getUsers();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<User>{
    return await this.userService.getUserById(id);
  }
  
}
