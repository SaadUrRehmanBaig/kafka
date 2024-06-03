import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaProducerService {
  constructor(
    @Inject('KAFKA_PRODUCER_SERVICE') readonly kafkaClient: ClientKafka,
  ) { }

  async onModuleInit() {
    this.kafkaClient.connect();
  }

  async produceMessage(topic: string, message: any) {
    console.log(message, topic)
    this.kafkaClient.emit(topic, message);
  }
}
