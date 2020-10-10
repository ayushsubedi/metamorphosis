const {Kafka} = require("kafkajs")


run();

async function run(){
    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["0.0.0.0:9092"]
        });

        const producer = kafka.producer();
        console.log("Connecting .. . . . ");
        await producer.connect();
        console.log("Connected!");

        // we are  creating two partitions 
        // one for name A-M
        // another one for N-z
        const partition = msg[0] < "N" ? 0 : 1;

        const result = await producer.send({
            "topic" : "Users",
            "messages" : [{
                "value": "test_message",
                "paratition": partition
            }]
        })
        console.log(`Send Successfully ${result}`);
        await producer.disconnect();
    }
    catch(ex){
        console.error(`Something is wrong ${ex}`)
    }
    finally{
        process.exit(0);
    }
}