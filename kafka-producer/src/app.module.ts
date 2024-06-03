import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModuleModule } from './kafka-module/kafka-module.module';
import { KafkaProducerService } from './kafka-module/kafka-producer-service/kafka-producer-service';

@Module({
  imports: [KafkaModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
