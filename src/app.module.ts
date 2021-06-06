import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventModule } from './events/event.module';
import { Event } from './events/event.entity';
import { Reserve } from './reserves/reserve.entity' 
import { ReserveModule } from './reserves/reserve.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'booking_app_nestjs',
      entities: [Event,Reserve,User],
      synchronize: true,
    }),
    ConfigModule.forRoot({ // envファイルを組み込むために使用
      envFilePath: ['.production.env', '.development.env'],
      isGlobal: true,
    }),
    EventModule,
    ReserveModule,
    UserModule,
    AuthModule,
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
