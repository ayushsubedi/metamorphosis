const {Kafka} = require("kafkajs")


run();

async function run(){
    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["0.0.0.0:9092"]
        });

        const consumer = kafka.consumer({"groupId": "test"});
        console.log("Connecting .. . . . ");
        await consumer.connect();
        console.log("Connected!");

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(result.message);
            }
        })
        // dont disconnect consumer
        // await consumer.disconnect();
    }
    catch(ex){
        console.error(`Something is wrong ${ex}`)
    }
    finally{
        // process.exit(0);
    }
}