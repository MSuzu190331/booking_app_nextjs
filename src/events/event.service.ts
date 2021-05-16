import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly repository: Repository<Event>,
  ) {}

  async getEvents(): Promise<Event[]>{
    return await this.repository.find();
  }

  async getEventById(id): Promise<Event> {
    return await this.repository.findOne(id)
  }
}
