const {Kafka} = require("kafkajs")


run();

async function run(){
    try{
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers":["0.0.0.0:9092"]
        });

        const admin = kafka.admin();
        console.log("Connecting .. . . . ");
        await admin.connect();
        console.log("Connected!");

        // we are  creating two partitions 
        // one for name A-M
        // another one for N-z
        await admin.createTopics({
            "topics": [{
                "topic": "Users",
                "numPartitions": 2
            }]
        });

        console.log("Created Successfully");
        await admin.disconnect();
    }
    catch(ex){
        console.error(`Something is wrong ${ex}`)
    }
    finally{
        process.exit(0);
    }
}