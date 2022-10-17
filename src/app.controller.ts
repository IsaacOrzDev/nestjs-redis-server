import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): Promise<number> {
    return new Promise((resolve) =>
      resolve((data || []).reduce((a, b) => a + b)),
    );
  }
}
