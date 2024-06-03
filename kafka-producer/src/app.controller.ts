import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { KafkaProducerService } from './kafka-module/kafka-producer-service/kafka-producer-service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private messageProducerService: KafkaProducerService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('kafka/send')
  postMessage(@Body() message: any) {
    this.messageProducerService.produceMessage("my-topic", message);
    return { status: 'Message sent' };
  }
}
