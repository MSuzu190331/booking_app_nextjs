import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from "./event.entity"; 

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  async getEvents(): Promise<Event[]>{
    return await this.eventService.getEvents();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Event>{
    return await this.eventService.getEventById(id);
  }
}
