### Apache Kafka Crash Course

### Kafka Server or the Kafka Broker

- first server that user interacts with
- default port 9092
- two pieces of abstraction:
  - producer produce content from broker
  - consumer consumes content from broker
- other abstraction is the connection
  - producer connect to broker (tcp raw bidirectional)
  - same with consumers 
- Topics are logical partitions where contents are written
- When producers writes, it has to specify what topic to write to
- Consumer specifies what topic to consume

__________

## Kafka storage system

- indexed
- appended to the end
- immutable

_______

### Topics can go large. where to go next? Sharding? 

Kafka Partitions

- based on some conditions
- maybe user_id mod no_of_partitions?
- or something to do with business
- but now producer and consumer need to know what partitions to write or consume from
- work with positions and partitions

## Que vs pub sub

- queue: message published once, consumed once
- pub sub: message published once, consumed many times
- youtube pubsub: you want multiple services to consume the raw mp4
  - take the raw video and convert into different codec
  - copyright services (is content being infringed)
- Kafka: how can we do both?
  - Answer: consumer group abstraction



## Consumer groups

- to act like a queue, put all consumers in one group
- to act like a pubsub, put each consumer is a unique group
- get parallel processing for free



## Distributed system

- take a broker and make it a leader

  - other brokers will read it from leader

- port 9093

- copy partitions 

- but how to systematize leader broker and follower broker?

- but kafka has leader and follower broker based on partitions and not broker

- kafka is distributed at the partition level and not broker level

- but where is that information stored?

  - zookeeper
  - even if you work with one broker, you need zookeeper

  ________________________________

### Example

- spin up zookeeper
- spin up kafka cluster (single)
- create topic noje js (kafkajs)
- create producer node js (kafkajs)
- create consumer node js (kafkajs)