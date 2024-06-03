import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { kafkaProducerConfig } from 'config/kafka-config';
import { KafkaProducerService } from './kafka-producer-service/kafka-producer-service';

@Module({
  imports: [ClientsModule.register([kafkaProducerConfig])],
  providers: [KafkaProducerService],
  exports: [KafkaProducerService]
})
export class KafkaModuleModule { }
