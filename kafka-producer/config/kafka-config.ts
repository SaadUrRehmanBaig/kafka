import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const kafkaProducerConfig: ClientProviderOptions = {
  name: 'KAFKA_PRODUCER_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'], // Replace with your Kafka broker address
    },
    producer: {
      allowAutoTopicCreation: true,
    },
  },
};
