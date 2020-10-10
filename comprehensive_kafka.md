## Comprehensive Kafka

### Background:

For a long time we wrote programs stored in DB. DB encourages us to think in "things" like user, etc. and they have some states. However, currently people have started to think in terms of events first.

Events have states too, but primary idea is that event is indication in time that the thing took place.

________________

Cumbersome to store event in database. Instead we use log.

little state, little description and timestamp

easy to build at scale unlike database

________________

Kafka is a system for managing logs or (topics)

Topic: ordered collection of events stored in durable way (disk and replicated disk)

one hardware failure wont take data away

Topics can be small or enormous. Can be stored for a while or for a long time.

Persistent records of events

______________________

each event represents a thing happening in business

think of events first and things second

____________________

initially monolithic architecture, difficult to encapsulate the idea

now the trend is to write small components, and these things can talk to each other via kafka topics

__________________

persistent real time streams

______________

other services can be built to gauge/realtime analytics dashboards/ etc . etc.

_______________

yesterday is a long time ago for some businesses

_________

data as events as they process

____

events, services, real time analytics, and kafka

distributed log

___________

once a company starts using kafka, there is a viral process. records of things and components communicating,...

_________

Kafka connect: there are/will be databases (legacy reasons or other reasons)

kafka connect, connects to db and creates topic ....

_________

ecosystem of connectors. open source/commercial for integrations

__________

grouping, aggregating, filtering, joining are the things that the services will do

kafka in the box has kafka stream (java api) to get that work done

_______





