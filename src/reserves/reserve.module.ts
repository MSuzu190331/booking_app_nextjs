import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReserveController } from './reserve.controller';
import { ReserveService } from './reserve.service';
import { Reserve } from './reserve.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  controllers: [ReserveController],
  providers: [ReserveService],
})
export class ReserveModule {}
