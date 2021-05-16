import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserve } from './reserve.entity';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve)
    private readonly repository: Repository<Reserve>,
  ) {}

  async getReserves(): Promise<Reserve[]>{
    return await this.repository.find();
  }

  async getReserveById(id): Promise<Reserve> {
    return await this.repository.findOne(id)
  }
}
