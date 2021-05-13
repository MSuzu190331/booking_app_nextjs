import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {

  getEvents() {
    return 'Hello World event!';
  }

  getEventById() {
  }
}
