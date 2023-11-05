// CRUD create update read delete 

const mongodb = require('mongodb')
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = 'mongodb+srv://viditchawda301:vidit723@cluster0.pv2nsge.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'


const client = new MongoClient(connectionURL);

// const id = new ObjectID()
// console.log(id)

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas")

        const db = client.db(databaseName)

        const col = db.collection("users")

        // const objectID = new ObjectID();

        // console.log(ObjectID)

        let personalDoucment = [
            {
                "name": { "first": "vidittoday", "last0": "chawda" },
                "birth": new Date(1912, 5, 23),
                "death": new Date(1954, 5, 7),
                "contribs": ["turing machine", "Turing test", "Turingery"],
                "views": 1250000
            },
            {
                "name": { "first": "vidit1", "last": "chawda1" },
                "birth": new Date(1912, 5, 23),
                "death": new Date(1954, 5, 7),
                "contribs": ["turing machine", "Turing test", "Turingery"],
                "views": 1250000
            },

        ]

        const p = await col.insertMany(personalDoucment);

        // col.findOne({ name: 'vidit0' }, (error, user) => {
        //     if (error) {
        //         return console.log('Unable to fetch')
        //     }
        //     console.log(user)
        // })

        const filter = { "name.last": "chawda" };

        const document = await col.findOne(filter);

        console.log("Document found:\n" + JSON.stringify(document));

        // const document = await col.findMany(personalDoucment)

        // console.log(`${p.insertedCount} documents inserted`)

        // console.log(p.ops)

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close()
    }
}

run().catch(console.dir)