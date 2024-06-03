import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {

    @MessagePattern('my-topic') // Topic to subscribe to
    handleMessage(@Payload() message: any) {
        console.log('Received message:', message);
        // Process the message here
    }
}
