import { Controller, Get } from '@nestjs/common';
import { GladiatorService } from 'gladiator';

@Controller()
export class AppController {
  constructor(private readonly gladiatorService: GladiatorService) {}

  @Get()
  getIsUsingSword(): Promise<boolean> {
    return this.gladiatorService.IsUsingSword();
  }
}
