1) install docker 
2) run `docker-compose up -d`
3) run following command to create a topic 
  `docker exec -it <kafka_container_id> kafka-topics --create --topic my-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1`

4) run following command to list topics `docker exec -it <kafka_container_id> kafka-topics --list --bootstrap-server localhost:9092`
5) run below command to listen all event in terminal `docker exec -it <kafka_container_id> kafka-console-consumer --bootstrap-server localhost:9092 --topic my-topic --from-beginning`
6) run following command to kill container `docker-compose down`
