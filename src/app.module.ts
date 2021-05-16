import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './events/event.module';
import { Event } from './events/event.entity';
import { Reserve } from './reserves/reserve.entity' 
import { ReserveModule } from './reserves/reserve.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'booking_app_nestjs',
      entities: [Event,Reserve],
      synchronize: true,
    }),
    EventModule,
    ReserveModule,
  ],
})
export class AppModule {}
