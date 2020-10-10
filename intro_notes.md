## Apache Kafka

- decouple data streams and systems
- source systems will have data in apache kafka and targe will get data from kafka
- website events, pricing data, financial transactions, user interactions ----> Kafka ----> Database, Analytics, email systems, auditing systems



## Why kafka?

- distributed, resilient architecture, fault tolerant
- horizontally scalable
  - 100s of brokers
  - millions of messages per second
- high performance (10ms) : almost real time
- used by 2000+ firms



## User cases

- messaging systems
- activity tracking
- gather metrics from different locations
- logs gathering
- stream processing (kafka streams api or spark)
- decoupling of system dependencies
- integration with spark, flink, storm, hadoop



## Examples

- Netflix recommendations real time
- uber uses kafka (real time)
- linkedin (connection recommenation)





