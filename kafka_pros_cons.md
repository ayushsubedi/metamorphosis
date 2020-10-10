## Kafka Pros

- Append only commit log
- .size() + 1 insert is fast
- (side note: Cassandra works the same)
- performance
- designed for events (events do not change)
- distributed with zookeeper (partitions)
- long polling (rabbitmq uses push model: consumers cant consume as fast) (subscription)
- consumers wait for messages (unlike request terminating right away like in traditional system)
- event driven, pub sub and queue (if there is only one consumer group, it is essentially queue)
- kafka works well with microservices
- listen to events as consumer
- scaling is amazing (horizontal, if another broker added, zookeeper knows)
- parallel processing 



## Kafka Cons

- zookeeper (apparently on large scale)

- producer explicit partition can lead to problems (but that is the same problem with sharding in rdb)

- complex to install, configure and manage

  