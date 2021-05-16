import { Controller, Get, Param } from '@nestjs/common';
import { ReserveService } from './reserve.service';
import { Reserve } from "./reserve.entity"; 

@Controller('reserve')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Get()
  async getReserves(): Promise<Reserve[]>{
    return await this.reserveService.getReserves();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Reserve>{
    return await this.reserveService.getReserveById(id);
  }
}
