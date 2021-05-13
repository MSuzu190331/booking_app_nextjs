import { Controller, Get, Param } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvents() {
    return this.eventService.getEvents();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string){
    return this.eventService.getEventById(id);
  }
}
